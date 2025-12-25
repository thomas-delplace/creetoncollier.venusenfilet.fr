import { useState } from 'react'
import css from './necklaceBuilder.module.css'
import { PreviousButton, NextButton } from './layouts/buttons/buttons'
import { useStep } from '../../context/StepContext'
import { Dialog, DialogBody, DialogFooter, DialogHeader } from './layouts/dialog/dialog'
import ScreenHeader from './layouts/ScreenHeader/ScreenHeader'
import { useNecklace } from '../../context/NecklaceContext'

const InfosFormScreen = () => {

  const { step } = useStep()
  const { necklace, setNecklace } = useNecklace()
  const [mailValue, setMailValue] = useState('')
  const [firstNameValue, setFirstNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')

  const isMailAddress = (string) => {
    const mailRegex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$', 'gi')
    return mailRegex.test(string)
  }
  const isSafeName = (string) => {
    const notSafeRegex = new RegExp('[^a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ" "-]', 'gi')
    return !notSafeRegex.test(string)
  }

  const mailChange = (event) => {
    const newValue = event.target.value
    setMailValue(newValue)

    if (isMailAddress(newValue)) {
      setNecklace(current => ({ ...current, mail: newValue }))
    } else {
      setNecklace(current => ({ ...current, mail: false }))
    }
  }

  const lastNameChange = (event) => {
    const newValue = event.target.value
    setLastNameValue(newValue)
    if (isSafeName(newValue)) {
      setNecklace(current => ({ ...current, lastName: newValue }))
    }
  }

  const firstNameChange = (event) => {
    const newValue = event.target.value
    setFirstNameValue(newValue)
    if (isSafeName(newValue)) {
      setNecklace(current => ({ ...current, firstName: newValue }))
    }
  }

  return (
    <Dialog>
      <DialogHeader>
        <ScreenHeader title="Tes coordonnées" step={step} />
      </DialogHeader>
      <DialogBody>
        <div className={css.infosForm}>
          <input className={`${css.firstName} ${css.input}`}
            onChange={firstNameChange}
            value={necklace.firstName ? necklace.firstName : firstNameValue}
            placeholder='Prénom' />
          <input className={`${css.lastName} ${css.input}`}
            onChange={lastNameChange}
            value={necklace.lastName ? necklace.lastName : lastNameValue}
            placeholder='Nom' />
          <input className={`${css.mailInput} ${css.input}`}
            onChange={mailChange}
            value={necklace.mail ? necklace.mail : mailValue}
            placeholder='Adresse e-mail' />
        </div>

      </DialogBody>
      <DialogFooter>
        <PreviousButton />
        <NextButton visible={necklace.mail !== false ? true : "grayed"} />
      </DialogFooter>
    </Dialog>
  )
}
export default InfosFormScreen