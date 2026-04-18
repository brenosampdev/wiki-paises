import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { formatCapitalize } from "./utils/utilities"

import { CaretDownIcon, GlobeIcon } from "@phosphor-icons/react"
import DropdownFilterItem from "./DropdownFilterItem"

const CONTINENTS = ['Americas', 'Europe', 'Asia', 'Africa', 'Oceania'] as const

function DropdownFilter() {
    const [isOpen, setIsOpen] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const currentRegion = searchParams.get('region')
    const dropdownRef = useRef<HTMLDivElement>(null)
    
    const displayText = currentRegion ? formatCapitalize(currentRegion) : 'All Continents'

    useEffect(() => {
        
        if (!isOpen) return
        
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
    
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)

    }, [isOpen])

    const handleSelect = (region: string | null) => {
        setSearchParams(prev => {
            const next = new URLSearchParams(prev)
            if (region) next.set('region', region)
            else next.delete('region')
            next.delete('page')  // reset paginação
            return next
        })
        setIsOpen(false)
    }
    
    return (
        <div ref={dropdownRef} className="flex flex-col items-center justify-center border border-border-primary">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                //TODO ajustar paddin do dropdown ajustar tamanho select                
                className="flex items-center justify-center px-8 py-2 flex-nowrap gap-2"
                >
                <GlobeIcon size={20} />
                <span className="sm:text-sm truncate">{displayText}</span>
                <CaretDownIcon size={20} />
            </button>
            {isOpen && (
                <div className="relative w-full">
                    <div className="absolute left-0 mt-2 z-10 w-full">
                        <ul className="flex flex-col bg-white p-2 gap-2 border border-border-primary rounded-sm shadow-lg min-w-full overflow-hidden divide-y divide-border-primary">
                            <DropdownFilterItem
                                label="All Continents"
                                isSelected={currentRegion == null}
                                onClick={() => handleSelect(null)}
                            />
                                
                            {CONTINENTS.map(continent => {
                            const continentValue = continent.toLowerCase()
                            
                            return (
                                <DropdownFilterItem
                                    key={continent}
                                    label={continent}
                                    isSelected={currentRegion === continentValue}
                                    onClick={() => handleSelect(continentValue)}
                                />
                            )
                        })}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropdownFilter