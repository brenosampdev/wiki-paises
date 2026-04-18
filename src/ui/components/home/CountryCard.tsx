import type { DTOCountry } from "../../../types/country/DTOCountry"

import { MapPinIcon, UsersFourIcon } from "@phosphor-icons/react"
import { formatPopulation, getPrimaryCapital } from "./utils/utilities"
import Badge from "../shared/Badge"
import { Link } from "react-router-dom"

type CountryCardProps = {
  country: DTOCountry
}

function CountryCard({ country } : CountryCardProps) {
    return (
        <Link to={`/country/${country.cca3}`} className="block">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-border-primary flex flex-col h-full">
                <img src={country.flags.svg} alt={country.flags.alt || country.name.common} className="w-full max-w-2xl h-48 object-cover"/>
                <div className="flex flex-col p-4 gap-3 bg-background-card flex-1 justify-between">
                    <div className="flex flex-row justify-between items-center">
                        <p className="font-country text-lg font-bold">{country.name.common}</p>
                        <Badge region={country.region}/>
                    </div>
                    <p className="flex flex-row items-center justify-start"><MapPinIcon size={18}/>{getPrimaryCapital(country.capital)}</p>
                    <div className="border-t border-t-border-primary"></div>
                    <p className="flex flex-row items-center justify-start gap-2"> <UsersFourIcon size={18}/> {formatPopulation(country.population)} RESIDENTS</p>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard