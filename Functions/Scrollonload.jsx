import { useEffect } from "react"

export const scrollToTop = ()=>{
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    
}