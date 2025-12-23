// useIsMobile.js
import { useEffect, useState } from "react"

const useIsMobile = (breakpoint = 960) => {
    console.log('useIsMobile hook chargé !')
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= breakpoint)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.addEventListener('resize', handleResize)
    }, [breakpoint])
    return isMobile
}

export default useIsMobile