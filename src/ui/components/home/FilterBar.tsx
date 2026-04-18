import DropdownFilter from "./DropdownFilter"
import SearchBar from "./SearchBar"
import type { SearchProps } from "./types/SearchProps"

function FilterBar({ search, onSearchChange }: SearchProps) {
    return (
        <>
            <section className="py-6 flex flex-row justify-between items-center border-b border-b-border-primary">
                <div className="flex flex-col sm:flex-row w-full gap-6 mx-10 my-2">
                    <SearchBar search={search} onSearchChange={onSearchChange}/>
                    <DropdownFilter/>
                </div>
            </section>
        </>
    )
}

export default FilterBar