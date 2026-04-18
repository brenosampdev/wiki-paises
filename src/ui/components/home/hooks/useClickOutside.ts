import { useEffect, type RefObject } from "react"

function useClickOutside(
    ref: RefObject<HTMLElement | null>,
    onOutsideClick: () => void,
    enabled: boolean = true
) {
    useEffect(() => {
        if (!enabled) return
        
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onOutsideClick()
            }
        } 

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
        
    }, [ref, onOutsideClick, enabled])
}

export default useClickOutside