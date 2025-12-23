import css from '../ScreenHeader.module.css'

const StepNumber = ({n}) => {

    return (
        <svg className={css.stepNumber} height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="45" stroke="#141414" strokeWidth="10" fill="none" />
            <text x="50" y="50" dominantBaseline="central" textAnchor="middle" fontSize="40" fontWeight="900" fill="#141414">{n}</text>
        </svg>
    )
}
export default StepNumber