import { useNecklace } from "../../context/NecklaceContext"
import settings from "../necklaceBuilder/settings"

const useGetBead = () => {

    const { necklace } = useNecklace()

    let value
    settings.beadTypes.forEach(beadType => {
        if (beadType.id === necklace.beadType) {
            value = beadType
        }
    })
    return value
}

export default useGetBead