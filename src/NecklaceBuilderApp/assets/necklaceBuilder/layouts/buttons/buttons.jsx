import css from './buttons.module.css'
import { useStep } from '../../../../context/StepContext'
import { ServerResProvider, useServerResponse } from '../../../../context/ServerResponseContext'
import useGatherData from '../../../hooks/useGatherData'
import apiRoute from '../../../../../apiRoute/apiRoute'


const BeginButton = () => {

  const { nextStep } = useStep()

  return(
    <button onClick={nextStep} className={`${css.button} ${css.beginButton}`}><span>COMMENCER</span></button>
  )
}

const PreviousButton = ({ visible }) => {

  const { previousStep } = useStep()

  const handleVisibility = () => {

    let visibility
    switch (visible) {
      case true:
        visibility = ''
        break;
      case "hidden":
        visibility = css.__invisible
        break;
      case "grayed":
        visibility = css.__grayed
        break;
    }
    return visibility
  }

  return (
    <button
      tabIndex="0"
      onClick={visible !== "grayed" ? previousStep : null}
      className={`${css.button} ${css.__previous} ${handleVisibility()}`}>
      <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
        <path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>
      <span>Précédent</span>
    </button>
  )
}

const NextButton = ({ visible }) => {

  const { nextStep } = useStep()

  const handleVisibility = () => {

    let visibility
    switch (visible) {
      case true:
        visibility = ''
        break;
      case "hidden":
        visibility = css.__invisible
        break;
      case "grayed":
        visibility = css.__grayed
        break;
    }
    return visibility
  }


  return (
    <button
      tabIndex="0"
      onClick={visible !== "grayed" ? nextStep : null}
      className={`${css.button} ${css.__next} ${handleVisibility()}`}>
      <span>Suivant</span>
      <svg viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
        <path d="m 480-320 160-160-160-160-56 56 64 64 H 320 v 80 h 168 l -64 64 56 56 Z  m 0 240 q -83 0-156-31.5 T 197-197 q -54-54-85.5-127 T 80-480 q 0-83 31.5-156 T 197-763 q 54-54 127-85.5 T 480-880 q 83 0 156 31.5 T 763-763 q 54 54 85.5 127 T 880-480 q 0 83-31.5 156 T 763-197 q -54 54-127 85.5 T 480-80 Z  m 0-80 q 134 0 227-93 t 93-227 q 0-134-93-227 t -227-93 q -134 0-227 93 t -93 227 q 0 134 93 227 t 227 93 Z " />
      </svg>
    </button>
  )
}

const SubmitButton = () => {

  const { nextStep } = useStep()
  const {setServerResponse} = useServerResponse()
  const data = useGatherData()

  const sendNecklace = async () => {

    nextStep()
    // now send request to server
    console.log(`APP URL : ${import.meta.env.VITE_APP_URL}:${import.meta.env.VITE_APP_PORT}`)
    const res = await fetch(apiRoute('/necklace'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
    const json =  await res.json()
    console.log("Server response : ", json)
    setServerResponse(json)
  }

  return (
    <ServerResProvider>
      <button
        onClick={sendNecklace}
        className={`${css.button} ${css.__submit}`}>
        <span>Valider ma commande</span>
      </button>
    </ServerResProvider>

  )
}

const PaymentButton = () => {
  return (
    <a href="https://boutique.venusenfilet.fr/article/collier-personnalise" className={css.paymentButton}>
          <div className={`${css.animButton} ${css.animButton1}`}></div>
          <div className={`${css.animButton} ${css.animButton2}`}></div>
          <span>PASSER AU PAIEMENT</span>
          <img src="nextArrow.svg" alt="fleche suivant"/>
    </a>
  )
}

export { PaymentButton, BeginButton, PreviousButton, NextButton, SubmitButton }