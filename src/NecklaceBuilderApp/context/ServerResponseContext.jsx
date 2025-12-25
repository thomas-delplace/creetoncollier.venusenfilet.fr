import { createContext, useContext, useState } from "react"

const ServerResContext = createContext(null)

const ServerResProvider = ({children}) => {

    const [serverResponse, setServerResponse] = useState(false)

    return(
        <ServerResContext.Provider value={{serverResponse,setServerResponse}}>
            {children}
        </ServerResContext.Provider>
    )

}

const useServerResponse = () => {
    const context = useContext(ServerResContext)
    try {
        if(!context){
            throw new Error('useServerResponse must be called inside a ServerRes Provider')
        }
        return context
    } catch (error) {
        console.error(error)
    }
}

export {ServerResProvider,useServerResponse}