// src/ui/components/details/CountryHero.tsx
import type { DTOCountry } from "../../../types/country/DTOCountry"

type CountryHeroProps = {
  country: DTOCountry
}

function CountryHero({ country }: CountryHeroProps) {
  return (
    <section className="flex flex-col items-center gap-8 py-8 max-w-4xl mx-auto">
      <img
        src={country.flags.svg}
        alt={country.flags.alt || country.name.common}
        className="w-full max-w-xl shadow-md rounded-sm"
      />
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-5xl font-serif font-bold text-stone-900">
          {country.name.official}
        </h1>
        <p className="text-lg text-amber-600 italic">
          {country.name.common}
        </p>
      </div>
      <hr className="w-full border-t border-stone-300" />
    </section>
  )
}

export default CountryHero