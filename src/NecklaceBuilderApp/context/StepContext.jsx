import { createContext, useContext, useState } from 'react'

const StepContext = createContext(null)

const StepProvider = ({ children }) => {

    const [step, setStep] = useState(0)

    const nextStep = () => {
        // console.log('next')
        setStep(currentStep => (currentStep += 1))
    }
    const previousStep = () => {
        // console.log('previous')
        setStep(currentStep => (currentStep -= 1))
    }
    return (
        <StepContext.Provider value={{ step, previousStep, nextStep }}>
            {children}
        </StepContext.Provider>
    )
}

const useStep = () => {
    const context = useContext(StepContext)
    try {
        if(!context){
                throw new Error('useStep must be used inside a StepProvider')
        }
        return context
    } catch (error) {
        console.error(error)
    }
}

export {StepProvider,useStep}