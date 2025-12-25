import { useRef, useEffect, useState } from "react"
import css from "./carousel.module.css"
import Selector from "../Selector/selector"

const Carousel = ({items, onClick, className}) => {

    const refCarousel = useRef(null)
    const refSelector = useRef(null)
    const [carouselOn, setCarouselOn] = useState(true)

    useEffect(()=>{
        if (!refCarousel.current || !refSelector.current || !refSelector.current.childNodes.length) return
        const selectorWidth = parseInt(window.getComputedStyle(refSelector.current).width)
        const carouselWidth = parseInt(window.getComputedStyle(refCarousel.current).width)
        if(selectorWidth > carouselWidth){
            setCarouselOn(true)
            console.log('carouselOn')
        }else{
            setCarouselOn(false)
            refSelector.current.setAttribute('style','width:100%;left:0;justify-content:center;transition:none;')
            console.log('!carouselOn')
        }
    }, [])

    const infos = () => {
        const c = refCarousel.current
        const s = refSelector.current
        let infos = {
            step:parseInt(window.getComputedStyle(refSelector.current.childNodes[0]).width.slice(0,-2)) + parseInt(window.getComputedStyle(refSelector.current).gap.slice(0,-2)),
            carousel:{
                width:parseInt(window.getComputedStyle(c).width.slice(0,-2)),
                left:parseInt(window.getComputedStyle(c).left.slice(0,-2)),
                right:parseInt(window.getComputedStyle(c).right.slice(0,-2))
            },
            selector:{
                width:parseInt(window.getComputedStyle(s).width.slice(0,-2)),
                left:parseInt(window.getComputedStyle(s).left.slice(0,-2)),
                right:parseInt(window.getComputedStyle(s).right.slice(0,-2))
            }
        }
        return infos
    }
    const navigateRight = () => {
        const selector = refSelector.current
        const step = infos().step
        let a = infos()
        const margin = parseInt(window.getComputedStyle(refCarousel.current.childNodes[0]).width)
        const minLeft = 0 - (a.selector.width-a.carousel.width) - margin

        if(a.selector.left > a.carousel.width - a.selector.width){
            console.log('beep')
            let newLeft = a.selector.left - step
            newLeft < minLeft ? newLeft = minLeft : null
            selector.setAttribute('style', `left:${newLeft}px`)

        }else if(a.selector.left < a.carousel.width - a.selector.width && a.selector.right > a.carousel.right - margin){
            console.log('boop')
            const newLeft = minLeft
            console.log(newLeft)
            selector.setAttribute('style', `left:${newLeft}px`)
        }
        
    }
    const navigateLeft = () => {
        const selector = refSelector.current
        const step = infos().step
        let a = infos()

        if(a.selector.left < a.carousel.left){
            console.log('beep')
            let newLeft = a.selector.left + step
            newLeft > 100 ? newLeft = 100 : null
            selector.setAttribute('style', `left:${newLeft}px`)

        }else if(a.selector.left >= a.carousel.left <= 100){
            console.log('boop')
            selector.setAttribute('style', `left:100px`)
        }
    }

    return(
        <div ref={refCarousel} className={css.carouselContainer}>
            {
                carouselOn && (
                    <div style={{overflow:"visible"}} className={`${css.carouselArrow} ${css.carouselLeftArrow}`} onClick={navigateLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" style={{overflow:"visible"}}>
                            <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" fill="#c08cbd"/>
                        </svg>
                    </div>
                )
            }
            <Selector items={items} onClick={onClick} className={className} innerRef={refSelector}/>
            {
                carouselOn && (
                    <div className={`${css.carouselArrow} ${css.carouselRightArrow}`} onClick={navigateRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#c08cbd"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/></svg>
                    </div>
                )
            }
            
        </div>
    )
}
export default Carousel