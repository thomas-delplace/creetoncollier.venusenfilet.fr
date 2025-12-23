import { useState } from 'react'
import css from './necklaceBuilder.module.css'
import { PreviousButton, NextButton } from './layouts/buttons/buttons'
import { useStep } from '../../context/StepContext'
import settings from './settings'
import { Dialog, DialogBody, DialogFooter, DialogHeader } from './layouts/dialog/dialog'
import ScreenHeader from './layouts/ScreenHeader/ScreenHeader'
import { useNecklace } from '../../context/NecklaceContext'
import ProductInfos from './elements/productInfos'



const MessageScreen = () => {

  const { step } = useStep()
  const { necklace, setNecklace } = useNecklace()
  const [ value, setValue ] = useState('')

  const tooLong = (string) => (string.length > settings.length.max ? true : false)
  const wrongChar = (string) => {
    let regexString = "a-z"
    if(necklace.numbers){ regexString = regexString+"0-9" }
    if(necklace.special != false){
      // console.log("typeof necklace.special =" + typeof(necklace.special))
      regexString = regexString + necklace.special.split("").join("\\")
    }
    regexString = regexString+" *"
    regexString = "[" + regexString + "]"
    // console.log(regexString)
    const regex = new RegExp(regexString)
    const lastChar = string.at(-1)
    return !regex.test(lastChar)
  }
  const handleChange = (event) => {
    const oldValue = value
    const newValue = event.target.value

    if (wrongChar(newValue)) {
      setValue(oldValue) // updates the text input
      setNecklace(current => ({ ...current, message: oldValue }))
      return
    }
    if (tooLong(newValue)) {
      setNecklace(current => ({ ...current, message: false }))
      setValue(newValue) // updates the text input
      return
    }

    setValue(newValue) // updates the text input
    setNecklace(current => ({ ...current, message: newValue }))
  }
  const handleLengthClasses = () => (necklace.message == false ? css.length__notOk : css.length__ok)

  return (

    <Dialog>
      <DialogHeader>
        <ScreenHeader title="Choisis ton message" step={step}/>
      </DialogHeader>
      <DialogBody>
        <ProductInfos/>
        <div className={css.messageInputContainer}>
          <input className={`${css.messageInput} ${css.input}`} 
                 onChange={handleChange}
                 value={necklace.message ? necklace.message : value}
                 placeholder='ton message ...' />
          <p className={handleLengthClasses()}>
            {value.length}/{settings.length.max}
          </p>
        </div>
      </DialogBody>
      <DialogFooter>
        <PreviousButton />
        <NextButton visible={necklace.message ? true : "grayed"} />
      </DialogFooter>
    </Dialog>
  )
}// NextButton > visible : remplacer par fonction qui verifie la chaine de caractères
export default MessageScreen