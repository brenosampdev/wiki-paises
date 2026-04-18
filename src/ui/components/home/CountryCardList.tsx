import type { DTOCountry } from "../../../types/country/DTOCountry"

import CountryCard from "./CountryCard"
import Pagination from "./Pagination"
import PaginationEmptyPage from "./PaginationEmptyPage"

type CountryListProps = {
    countries: DTOCountry[]
    totalCountries: number
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    searchTerm: string
}

function CountryList({ countries, totalCountries, currentPage,  totalPages, onPageChange, searchTerm } : CountryListProps) {
    return (
        <section className="flex flex-col p-8 gap-8">
            <h1>{totalCountries} NATIONS FOUND IN {searchTerm && <> · "{searchTerm.toUpperCase()}"</>}</h1>
            {countries.length === 0 ? ( <PaginationEmptyPage />) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {countries.map((country) => (
                        <CountryCard key={country.cca3} country={country}/>
                    ))}
                </div>
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </section>
    )
}

export default CountryList