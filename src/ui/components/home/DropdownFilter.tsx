import { useRef, useState } from "react"

import { formatCapitalize } from "./utils/utilities"

import { CaretDownIcon, GlobeIcon } from "@phosphor-icons/react"
import { useRegionFilter } from "./hooks/useRegionFilter"
import ContinentOptionsList from "../shared/ContinentOptionsList"
import useClickOutside from "./hooks/useClickOutside"

function DropdownFilter() {
    const [isOpen, setIsOpen] = useState(false)
    const { currentRegion, selectCurrentRegion  } = useRegionFilter()
    const dropdownRef = useRef<HTMLDivElement>(null)
    
    const displayText = currentRegion ? formatCapitalize(currentRegion) : 'All Continents'

    useClickOutside(dropdownRef, () => setIsOpen(false), isOpen)

    const handleSelect = (region: string | null) => {
        selectCurrentRegion(region)
        setIsOpen(false)
    }
    
    return (
        <div ref={dropdownRef} className="flex flex-col items-center justify-center border border-border-primary">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center px-8 py-2 flex-nowrap gap-2"
                >
                <GlobeIcon size={20} />
                <span className="sm:text-sm truncate">{displayText}</span>
                <CaretDownIcon size={20} />
            </button>
            {isOpen && (
                <div className="relative w-full">
                    <div className="absolute left-0 mt-2 z-10 w-full">
                        <ContinentOptionsList
                            currentRegion={currentRegion}
                            onSelect={handleSelect}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropdownFilter