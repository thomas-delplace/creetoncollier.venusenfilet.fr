import { useServerResponse } from "../../context/ServerResponseContext"
import { React } from 'react'
import { Dialog, DialogBody, DialogFooter, DialogHeader } from "./layouts/dialog/dialog"
import css from './necklaceBuilder.module.css'
import ButtonSimple from "./layouts/buttons/ButtonSimple"
import ScreenHeader from "./layouts/ScreenHeader/ScreenHeader"
import Logo from "./media/logo/Logo"
import { PaymentButton } from "./layouts/buttons/buttons"


const LoadingDialog = () => {
  return(
    <Dialog>
      <div className={css.loadingContainer}>
        <Logo/>
        <h3>chargement...</h3>
      </div>
    </Dialog>
  )
}

const SuccessDialog = () => {
  return (
    <Dialog>
      <DialogHeader>
        <ScreenHeader step="&#10003;" title="Félicitations !"/>
      </DialogHeader>
      <DialogBody>
        <h2>Ta commande a bien été envoyée !</h2>
        <PaymentButton/>
      </DialogBody>
      <DialogFooter>
        {/* <ButtonSimple onClick={()=>{window.location.href="/"}} text="ACCUEIL"/>
        <ButtonSimple onClick={()=>{window.location.href="/customisation"}} text="NOUVEAU COLLIER"/> */}
      </DialogFooter>
    </Dialog>
  )
}

const ErrorDialog = () => {
  return (
    <Dialog>
    <DialogHeader>
      <ScreenHeader step="!" title="Oops !"/>
    </DialogHeader>
      <DialogBody>
        <h2>Une erreur est survenue au moment de l&apos;envoi...</h2>
        <p className={css.confirmationText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, minima aperiam atque officia vel praesentium quia! Sequi quisquam eos iure, modi porro officiis fugiat nostrum expedita tempora hic ipsam velit?</p>
      </DialogBody>
      <DialogFooter>
        <ButtonSimple onClick={()=>{window.location.href="/"}} text="ACCUEIL"/>
        <ButtonSimple onClick={()=>{window.location.href="/customisation"}} text="RÉESSAYER"/>
      </DialogFooter>
    </Dialog>
  )
}


const ConfirmationScreen = () => {
  const serverResponse = useServerResponse()

  return (
    <React.Fragment>
      {serverResponse === false && <LoadingDialog/> }
      {serverResponse === 200 && <SuccessDialog/> }
      {serverResponse === 500 && <ErrorDialog/> }
    </React.Fragment>
  )
}
export { ConfirmationScreen, LoadingDialog, SuccessDialog, ErrorDialog }