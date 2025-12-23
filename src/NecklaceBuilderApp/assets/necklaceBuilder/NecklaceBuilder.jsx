import { useStep } from "../../context/StepContext"
import css from './necklaceBuilder.module.css'
import WelcomeScreen from './WelcomeScreen'
import ChainScreen from './ChainScreen'
import BeadScreen from './BeadScreen'
import MessageScreen from './MessageScreen'
import InfosFormScreen from "./InfosFormScreen"
import VerificationScreen from "./VerificationScreen"
import {ConfirmationScreen, ErrorDialog, LoadingDialog, SuccessDialog} from "./ConfirmationScreen"
import Venus from "./media/venus/Venus"
import Logo from "./media/logo/Logo"

const NecklaceBuilder = () => {

    const {step} = useStep()

    return (
        <div className={css.necklaceBuilder}>
            <Venus/>
            {step === 0 && <WelcomeScreen/>}
            {step === 1 && <ChainScreen />}
            {step === 2 && <BeadScreen />}
            {step === 3 && <MessageScreen />}
            {step === 4 && <InfosFormScreen />}
            {step === 5 && <VerificationScreen/>}
            {step === 6 && <ConfirmationScreen/>}
        </div>
    )
}
export default NecklaceBuilder