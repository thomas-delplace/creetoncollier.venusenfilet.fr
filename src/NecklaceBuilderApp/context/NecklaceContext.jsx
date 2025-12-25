import { createContext, useContext , useState } from "react";

const NecklaceContext = createContext(null)

const NecklaceProvider = ({ children }) => {

    const [necklace, setNecklace] = useState({
        chainType: false,
        beadType: false,
        message: null,
        numbers: false,
        special: false,
        firstName:false,
        lastName:false,
        mail:false
    })

    return (
        <NecklaceContext.Provider value={{ necklace, setNecklace }}>
            {children}
        </NecklaceContext.Provider>
    )
}

const useNecklace = () => {
    const context = useContext(NecklaceContext)
    try {
        if(!context){
            throw new Error('useNecklace must be called inside a Necklace Provider')
        }
        return context
    } catch (error) {
        console.error(error)
    }
}

export {NecklaceProvider, useNecklace}