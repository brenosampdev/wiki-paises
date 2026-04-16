import type { DTOCountry } from "../../../types/country/DTOCountry"

import CountryCard from "./CountryCard"

type CountryListProps = {
  countries: DTOCountry[]
}

// TODO: Implements CountryCard, Pagination and Footer
function CountryList({ countries } : CountryListProps) {
    return (
        <>
        <section className="flex flex-col px-8 mt-8 gap-8">
            <h1>{countries.length} NATIONS FOUND IN </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {countries.map((countrys) => (
                    <CountryCard key={countrys.cca3} country={countrys}/>
                ))}
            </div>
            {/* <Pagination/> */}
        </section>
        </>
    )
}

export default CountryList