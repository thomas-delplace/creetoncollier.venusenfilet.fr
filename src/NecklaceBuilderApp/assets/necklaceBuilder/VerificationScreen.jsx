import css from './necklaceBuilder.module.css'
import { useStep } from '../../context/StepContext'
import { Dialog, DialogHeader, DialogBody, DialogFooter } from './layouts/dialog/dialog'
import ScreenHeader from './layouts/ScreenHeader/ScreenHeader'
import { PreviousButton, SubmitButton } from './layouts/buttons/buttons'
import { useNecklace } from '../../context/NecklaceContext'
import useGetChain from '../hooks/useGetChain'
import useGetBead from '../hooks/useGetBead'

const VerificationScreen = () => {

    const {step} = useStep()
    const {necklace} = useNecklace()
    const chainType = useGetChain()
    const beadType = useGetBead()

  return (
    <Dialog>
      <DialogHeader>
        <ScreenHeader title="Confirmation" step={step}/>
      </DialogHeader>
      <DialogBody>
        <h3>Vérifie tes coordonnées :</h3>
        <ul className={css.recapInfos}>
            {necklace.firstName && <li><span>Prénom</span><span>{necklace.firstName}</span></li>}
            {necklace.lastName && <li><span>Nom</span><span>{necklace.lastName}</span></li>}
            <li><span>Adresse e-mail</span><span>{necklace.mail}</span></li>
        </ul>
        <h3>Collier</h3>
        <ul className={css.recapNecklace}>
          <li>
            <img src={chainType.img} alt={chainType.alt} />
            <div>
              <span>Chaîne</span>
              <span>{chainType.label}</span>
            </div>
            
          </li>
          <li>
            <img src={beadType.img} alt={beadType.alt} />
            <div>
              <span>Perles</span>
              <span>{beadType.label}</span>
            </div>
            
          </li>
        </ul>
        <h3>Vérifie ton message :</h3>
        <span className={css.messagePreview}>{necklace.message}</span>
      </DialogBody>
      <DialogFooter>
        <PreviousButton />
        <SubmitButton />
      </DialogFooter>
    </Dialog>
  )
}
export default VerificationScreen