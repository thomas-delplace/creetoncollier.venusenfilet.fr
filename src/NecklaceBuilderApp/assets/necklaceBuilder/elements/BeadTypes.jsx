import beadData from '../../../data/beadData.json'

const beadImagesUrl = import.meta.glob('../../../data/beadImages/*', {eager:true})

const beadImages = Object.fromEntries(
    Object.entries(beadImagesUrl).map(([path, mod]) => {
        const fileName = path.split('/').pop()
        return [fileName, mod.default]
    })
)
const beadTypes = Object.entries(beadData).map(([id, bead]) => ({
    id,
    ...bead,
    img:beadImages[bead.img]
}))

export default beadTypes