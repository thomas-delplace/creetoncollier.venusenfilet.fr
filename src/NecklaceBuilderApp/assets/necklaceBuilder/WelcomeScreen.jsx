import css from './necklaceBuilder.module.css'
import { Dialog, DialogHeader, DialogBody, DialogFooter } from './layouts/dialog/dialog'
import ScreenHeader from './layouts/ScreenHeader/ScreenHeader'
import { BeginButton } from './layouts/buttons/buttons'

const WelcomeScreen = () => {

  return (
    <Dialog>
      <DialogHeader>
        <ScreenHeader title="Bienvenue !"/>
      </DialogHeader>
      <DialogBody>
        <h1 className={css.title}>Crée ton collier</h1>
        <BeginButton />
      </DialogBody>
      <DialogFooter>
        <p><span>Vénus en Filet</span> - <span>Créations impertinentes</span></p>
      </DialogFooter>
    </Dialog>
  )
}
export default WelcomeScreen