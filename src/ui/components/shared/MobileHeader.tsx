import { useRef, useState } from "react"
import { ListIcon, XIcon } from "@phosphor-icons/react"

import ContinentFilter from "../home/ContinentFilter"
import useClickOutside from "../home/hooks/useClickOutside"

function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)
    
    const toggleOpen = () => setIsOpen(prev => !prev)
    const close = () => setIsOpen(false)
    
    useClickOutside(navRef, close, isOpen)
    
    return (
        <div ref={navRef} className="relative">
            <button 
                onClick={toggleOpen} 
                className="focus:outline-none"
            >
                {isOpen ? <XIcon size={28} /> : <ListIcon size={28} />}
            </button>
            
            {isOpen && (
                <div className="absolute right-0 top-12 z-50 w-64 rounded-lg bg-white p-6 shadow-xl">
                    <ContinentFilter variant="mobile" closeMenu={close} />
                </div>
            )}
        </div>
    )
}

export default MobileHeader