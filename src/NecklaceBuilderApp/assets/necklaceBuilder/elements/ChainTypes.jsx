import chainData from'../../../data/chainData.json'

const chainImagesUrl = import.meta.glob('../../../data/chainImages/*', {eager:true})

const chainImages = Object.fromEntries(
    Object.entries(chainImagesUrl).map(([path, mod]) => {
        const fileName = path.split('/').pop()
        return [fileName, mod.default]
    })
)

const chainTypes = Object.entries(chainData).map(([id, chain]) => ({id, ...chain, img:chainImages[chain.img]}))

export default chainTypes