import css from './necklaceBuilder.module.css'
import { PreviousButton, NextButton } from './layouts/buttons/buttons'
import { useStep } from '../../context/StepContext'
import settings from './settings'
import { Dialog, DialogBody, DialogFooter, DialogHeader } from './layouts/dialog/dialog'
import ScreenHeader from './layouts/ScreenHeader/ScreenHeader'
import { useNecklace } from '../../context/NecklaceContext'
import ProductInfos from './elements/productInfos'
import Carousel from './layouts/Carousel/Carousel'
import useIsMobile from '../hooks/useIsMobile'
import { useEffect } from 'react'
import beadTypes from './elements/BeadTypes'

const BeadScreen = () => {

  const { step } = useStep()
  const { necklace, setNecklace } = useNecklace()
  const isMobile = useIsMobile()

  useEffect(() => {
    if(isMobile && !necklace.beadType){
      setBeads(beadTypes[0])
    }
  }, [isMobile])

  const setBeads = (type) => {
    setNecklace((current) => ({ ...current, beadType: type.id }))

    if(type.infos.numbers){ // verify if the present type accepts numbers
      // console.log("type.infos.numbers : ",type.infos.numbers)
      setNecklace(current => ({ ...current, numbers: true }))
    } else {
      if(necklace.message){ // if the message has already been set
        const numberRegex = new RegExp('[0-9]', 'g')
        numberRegex.test(necklace.message) && setNecklace(current=>({ ...current, message:null})) // and has numbers, the message is reset
      }
      setNecklace(current => ({ ...current, numbers: false }))
    }

    if(type.infos.special){
      // console.log("type.infos.special : ",type.infos.special)
      setNecklace(current => ({ ...current, special: type.infos.special }))
    } else {
      if(necklace.message){ // if the message has already been set
        const numberRegex = new RegExp('[*+-&$]', 'g')
        numberRegex.test(necklace.message) && setNecklace(current=>({ ...current, message:null})) // and has numbers, the message is reset
      }
      setNecklace(current => ({ ...current, numbers: false }))
    }
  }

  const checkBead = (type) => {
    const currentBeadType = necklace.beadType
    if (currentBeadType === false) { return "__unselected" }
    if (type.id !== currentBeadType) { return "__unselected" }
    if (type.id === currentBeadType) { return "__selected" }
  }

  return (
    <Dialog>
      <DialogHeader>
        <ScreenHeader title="Choisis ton type de perle" step={step}/>
      </DialogHeader>
      <DialogBody>
        <Carousel items={settings.beadTypes} onClick={setBeads} className={checkBead}/>
        <ProductInfos/>
       </DialogBody>
      <DialogFooter>
        <PreviousButton />
        <NextButton visible={necklace.beadType ? true : "grayed"} />
      </DialogFooter>
    </Dialog>
  )
}
export default BeadScreen