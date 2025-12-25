import style from './Swiper.module.css'
import { useSwipeable } from 'react-swipeable'

const Swiper = ( swipe ) => {

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => swipe.left(),
        onSwipeRight: () => swipe.right()
    })

    return(
        <div className={style.swiper} {...swipeHandlers}>
        </div>
    )
}
export default Swiper