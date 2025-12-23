import { useNecklace } from "../../../context/NecklaceContext";
import limited from "./productInfos/limited.svg"
import numbers from "./productInfos/numbers.svg"
import specials from "./productInfos/specials.svg"
import beadTypes from './BeadTypes'



const ProductInfos = () => {

    const{ necklace, setNecklace } = useNecklace()

    return(
        <div>
            {necklace.beadType && beadTypes.find(item => item.id === necklace?.beadType).infos?.limited && (
            <div Style="display:flex;gap:5px;align-items:center;">
                <img src={limited} alt="limité" height="32" Style="flex-grow:0;flex-shrink:0;"/>
                <p>Stock faible, visuel non-contractuel.</p>
            </div>
            )}
            {necklace.beadType && beadTypes.find(item => item.id === necklace.beadType).infos?.numbers && (
            <div Style="display:flex;gap:5px;align-items:center;">
                <img src={numbers} alt="numbers" height="32" Style="flex-grow:0;flex-shrink:0;"/>
                <p>Tu peux utiliser des chiffres.</p>
                </div>
            )}
            {necklace.beadType && beadTypes.find(item => item.id === necklace.beadType).infos?.special && (
            <div Style="display:flex;gap:5px;align-items:center;">
                <img src={specials} alt="numbers" height="32" Style="flex-grow:0;flex-shrink:0;"/>
                <p>Tu peux utiliser les caractères spéciaux suivants : {beadTypes.find(item => item.id === necklace.beadType).infos?.special}</p>
                </div>
            )}
        </div>
    )
}

export default ProductInfos