import { useNecklace } from "../../context/NecklaceContext"
import settings from "../necklaceBuilder/settings"

const useGetChain = () => {

  const { necklace } = useNecklace()

  let value
  settings.chainTypes.forEach(chainType => {
    if (chainType.id === necklace.chainType) {
      value = chainType
    }
  })
  return value
}
export default useGetChain