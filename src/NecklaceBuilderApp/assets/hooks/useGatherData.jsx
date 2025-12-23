import useGetBead from "./useGetBead"
import useGetChain from "./useGetChain"
import { useNecklace } from "../../context/NecklaceContext"

const useGatherData = () => {

    const beadType = useGetBead()
    const chainType = useGetChain()

    // console.log(beadType)
    // console.log(chainType)
    const { necklace } = useNecklace()

    // gather all data for the request
    let dataToSend = {
        necklace: {
            beads: beadType.alt,
            chain: chainType.label,
            message: necklace.message,
            count: necklace.message.length
        },
        client: {
            mail: necklace.mail
        }
    }
    if (necklace.firstName) {
        dataToSend.client.firstName = necklace.firstName
    }
    if (necklace.lastName) {
        dataToSend.client.lastName = necklace.lastName
    }

    return JSON.stringify(dataToSend)
}

export default useGatherData