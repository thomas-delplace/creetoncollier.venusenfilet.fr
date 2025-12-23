import { Link } from 'react-router-dom'
import css from './CustomizeSection.module.css'

const CustomizeSection = () => {
  return (
    <div className={css.outerWrapper}>
      <div className={css.innerWrapper}>
        <div className={css.caption}>
          <h2>Personnalise<br />ton collier</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam impedit sed consequuntur ipsum nemo quas ipsa molestiae. Praesentium fugiat inventore quasi nobis facere voluptates odit quae adipisci molestiae! Animi, laudantium.</p>
        </div>
        <div className={css.calltoaction}>
          <img src="venus.webp" alt="" />
          <Link to="/customisation">COMMENCER</Link>
        </div>
      </div>
    </div>
  )
}
export default CustomizeSection