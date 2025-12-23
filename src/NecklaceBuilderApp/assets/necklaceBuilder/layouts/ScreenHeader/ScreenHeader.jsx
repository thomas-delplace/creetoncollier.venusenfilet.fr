import Logo from '../../media/logo/Logo'
import css from './ScreenHeader.module.css'
import StepNumber from './stepNumber/StepNumber'

const ScreenHeader = ({title, step}) => {

  return (
    <div className={css.screenHeader}>
      <div className={css.titleContainer}>
        <div className={css.leftHeader}>
          {step && <StepNumber n={step}/>}
          <h2 className={css.subtitle}>{title}</h2>
        </div>
        <div className={css.rightHeader}>
          <Logo/>
        </div>
      </div>
      
    </div>
  )
}
export default ScreenHeader