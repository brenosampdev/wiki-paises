import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import type { SearchProps } from "./types/SearchPropsType"


function SearchBar({ search, onSearchChange }: SearchProps) {
    return (
        <div className="flex flex-row items-center border w-full border-border-primary px-3">
            <MagnifyingGlassIcon size={20} className="text-gray-400" />
            <input 
                type="search"
                value={search}
                onChange={(e) => {
                    console.log('Digitei ' + e.target.value)
                    onSearchChange(e.target.value)
                }}
                placeholder="Search by nation, capital, or country..."
                className="outline-0 flex-1 px-2 py-2"
            />
        </div>
    )
}

export default SearchBar