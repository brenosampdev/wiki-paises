import type { DTOCountry } from "../../../types/country/DTOCountry"

import { UsersFourIcon } from "@phosphor-icons/react"

type CountryCardProps = {
  country: DTOCountry
}

function CountryCard({ country } : CountryCardProps) {
    return (
        <>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <img src={country.flags.png} alt={country.flags.alt || country.name.common} className="w-full max-w-2xl h-48 object-cover"/>
            <div className="flex flex-col">
                <hr />
                <p className="flex flex-row items-center justify-start gap-2"> <UsersFourIcon size={18}/> {country.population.toLocaleString('pt-br')} RESIDENTS</p>
            </div>
        </div>
        
        
        </>
    )
}

export default CountryCard