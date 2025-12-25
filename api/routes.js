const express = require('express')
const nodemailer = require('nodemailer')
const routes = express.Router()

////////////////////////////////////////////////// POST
routes.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    console.log("Headers:", req.headers)
    next()
    console.log('Response sent : ', res.statusCode)
})

routes.post('/necklace', async (req,res)=>{
    console.log("Received necklace order:", req.body)
    try {
        const transporter = nodemailer.createTransport({
            host:process.env.SENDER_HOST,
            port:process.env.SENDER_PORT,
            secure:false,
            requireTLS:process.env.SENDER_TLS,
            auth:{
                user:process.env.SENDER_EMAIL,
                pass:process.env.SENDER_PASS
            }
        })
        console.log("Transporter created, preparing email...") /// WONT CREATE TRANSPORT
        const mailOptions = {
            from:process.env.SENDER_EMAIL,
            to:process.env.RECEIVER_EMAIL,
            subject:'Commande de collier personnalisé',
            text:`Tu viens de recevoir une demande de ${req.body.client.mail} (${req.body.client.firstName} ${req.body.client.lastName}) pour un collier personnalisé. \n\n Chaine ${req.body.necklace.chain}, \n ${req.body.necklace.beads}, \n message : ${req.body.necklace.message}`
        }
        const infos = transporter.sendMail(mailOptions)
        console.log("Email sent: ", infos)
        return res.status(200).json({message:"La commande a bien été transmise."})
    }
    catch (error) {
        console.error("Error sending email:", error)
        return res.status(500).json({message:"Une erreur est survenue lors de l'envoi de la commande."})
    }
})

routes.post('/on',(req,res)=>{
    res.status(200).json({message:"okay"})
})
module.exports = routes
