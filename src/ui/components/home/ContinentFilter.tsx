import { Link  } from "react-router-dom"
import { CONTINENTS, useRegionFilter } from "./hooks/useRegionFilter"

import ContinentOptionsList from "../shared/ContinentOptionsList"
import { useEffect, useRef, useState } from "react"

type ContinentFilterProps = {
    variant: "desktop" | "mobile"
    closeMenu?: () => void
}

function ContinentFilter({ variant, closeMenu } : ContinentFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { currentRegion, selectCurrentRegion  } = useRegionFilter()
  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (variant !== "mobile" || !isOpen) return
      
    const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false)
        }
    } 

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)

  }, [variant, isOpen])
  
  const handleSelect = (currentRegion: string | null) => {
    selectCurrentRegion(currentRegion)
    closeMenu?.()
  }
  if (variant === "mobile") {
      
      return (
          <div className="flex flex-col gap-4">
              <span className="text-sm font-bold">Filter by Continent</span>
              <ContinentOptionsList
                  currentRegion={currentRegion}
                  onSelect={handleSelect}
              />
          </div>
      )
  }

  // Desktop
  return (
    <ul className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
      {CONTINENTS.map((continent) => {
        const value = continent.toLowerCase()
        const isActive = currentRegion === value
        
        return (
            <li key={continent}>
                <Link
                    to={`/?region=${value}`}
                    className={`transition-colors hover:text-amber-600 ${
                        isActive 
                            ? "border-b-2 border-amber-500 pb-1" 
                            : "text-gray-500"
                    }`}
                >
                    {continent}
                </Link>
            </li>
          )
      })}
    </ul>
  )
}

export default ContinentFilter