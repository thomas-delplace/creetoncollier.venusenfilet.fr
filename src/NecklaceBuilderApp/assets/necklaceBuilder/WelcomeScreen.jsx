import { useContext, useState } from 'react'
import ButtonSimple from './layouts/buttons/ButtonSimple'
import css from './necklaceBuilder.module.css'
import { useStep } from '../../context/StepContext'
import { Dialog, DialogHeader, DialogBody, DialogFooter } from './layouts/dialog/dialog'
import ScreenHeader from './layouts/ScreenHeader/ScreenHeader'
import { BeginButton } from './layouts/buttons/buttons'

const WelcomeScreen = () => {

  const {nextStep} = useStep()

  return (
    <Dialog>
      <DialogHeader>
        <ScreenHeader title="Bienvenue !"/>
      </DialogHeader>
      <DialogBody>
        <h1 className={css.title}>Crée ton collier</h1>
        <BeginButton />
      </DialogBody>
      <DialogFooter>
        <p><span>Vénus en Filet</span> - <span>Créations impertinentes</span></p>
      </DialogFooter>
    </Dialog>
  )
}
export default WelcomeScreen