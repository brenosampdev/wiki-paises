// src/ui/components/details/CountryInfos.tsx
import {
  BuildingsIcon,
  GlobeIcon,
  CompassIcon,
  MapTrifoldIcon,
  UsersThreeIcon,
  TranslateIcon,
  MoneyIcon,
  HashIcon,
} from "@phosphor-icons/react"
import type { DTOCountry } from "../../../types/country/DTOCountry"
import CountryInfoBlock from "../shared/CountryInfoBlock"

type CountryInfosProps = {
  country: DTOCountry
}

function CountryInfos({ country }: CountryInfosProps) {
    const languages = (() => {
        if (country.languages) {
            return Object.values(country.languages).join(", ")
        }
        return "N/A"
    })()

    const currencyText = (() => {
        if (country.currencies) {
            const entries = Object.entries(country.currencies)
            if (entries.length > 0) {
                const [code, info] = entries[0]
                return `${info.name} · ${code} · ${info.symbol ?? ""}`
            }
        }
    return "N/A"
    })()

  const iconSize = 20

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <div className="bg-background-card rounded-md p-6 flex flex-col gap-5 border border-stone-200">
        <CountryInfoBlock
          icon={<BuildingsIcon size={iconSize} />}
          label="CAPITAL"
          value={country.capital?.[0] ?? "N/A"}
        />
        <CountryInfoBlock
          icon={<GlobeIcon size={iconSize} />}
          label="CONTINENT"
          value={country.continents?.[0] ?? country.region}
        />
        <CountryInfoBlock
          icon={<CompassIcon size={iconSize} />}
          label="SUB-REGION"
          value={country.subregion ?? "N/A"}
        />
        <CountryInfoBlock
          icon={<MapTrifoldIcon size={iconSize} />}
          label="AREA"
          value={`${country.area.toLocaleString("en-US")} km²`}
        />
      </div>

      <div className="bg-background-card rounded-md p-6 flex flex-col gap-5 border border-stone-200">
        <CountryInfoBlock
          icon={<UsersThreeIcon size={iconSize} />}
          label="POPULATION"
          value={country.population.toLocaleString("en-US")}
        />
        <CountryInfoBlock
          icon={<TranslateIcon size={iconSize} />}
          label="LANGUAGES"
          value={languages}
        />
        <CountryInfoBlock
          icon={<MoneyIcon size={iconSize} />}
          label="CURRENCY"
          value={currencyText}
        />
        <CountryInfoBlock
          icon={<HashIcon size={iconSize} />}
          label="COUNTRY CODE"
          value={country.cca3}
        />
      </div>
    </section>
  )
}

export default CountryInfos