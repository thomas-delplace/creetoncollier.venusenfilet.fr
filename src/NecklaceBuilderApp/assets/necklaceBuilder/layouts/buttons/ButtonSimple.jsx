import css from './ButtonSimple.module.css'

const ButtonSimple = ({text,onClick}) => {

  return (
    <button onClick={onClick} className={css.button}>{text}</button>
  )
}
export default ButtonSimple