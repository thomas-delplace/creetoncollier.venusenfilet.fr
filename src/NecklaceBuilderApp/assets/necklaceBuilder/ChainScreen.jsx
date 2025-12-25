import { PreviousButton, NextButton } from './layouts/buttons/buttons'
import { Dialog, DialogHeader, DialogBody, DialogFooter } from './layouts/dialog/dialog'
import { useStep } from '../../context/StepContext'
import settings from './settings'
import Carousel from './layouts/Carousel/Carousel'
import ScreenHeader from './layouts/ScreenHeader/ScreenHeader'
import { useNecklace } from '../../context/NecklaceContext'

const ChainScreen = () => {

    const { step } = useStep()
    const { necklace, setNecklace } = useNecklace()

    const setChain = (type) => {
        // console.log('setChain : ' + type.id)
        setNecklace((current) => ({ ...current, chainType: type.id }))
    }

    const checkChain = (type) => {
        const currentChainType = necklace.chainType
        if (currentChainType === false) {
            return ""
        }
        if (type.id !== currentChainType) {
            return "__unselected"
        }
        if (type.id === currentChainType) {
            return "__selected"
        }
    }

    return (
        <Dialog>
            <DialogHeader>
                <ScreenHeader title="Choisis ta chaîne" step={step}/>
            </DialogHeader>
            <DialogBody>
                <Carousel items={settings.chainTypes} onClick={setChain} className={checkChain}/>
            </DialogBody>
            <DialogFooter>
                <PreviousButton/>
                <NextButton visible={necklace.chainType ? true : "grayed"} />
            </DialogFooter>
        </Dialog>
    )
}
export default ChainScreen