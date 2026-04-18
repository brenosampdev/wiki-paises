import type { DTOCountry } from '../../../../types/country/DTOCountry'


const populationFormatter = Intl.NumberFormat('en', {
  notation: 'compact',
  maximumFractionDigits: 1
})

export function filterCountriesByName(
  countries: DTOCountry[],
  search: string
): DTOCountry[] {
  if (!search.trim()) return countries
  
  const normalized = search.trim().toLowerCase()
  return countries.filter(country => 
    country.name.common.toLowerCase().includes(normalized)
  )
}

export function formatPopulation(population: number): string {
  return populationFormatter.format(population)
}

export function formatCapitalize(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getPrimaryCapital(capitals: string[] | undefined): string {
  return capitals?.[0] ?? 'N/A'
}

export function getAllCapitals(capitals: string[] | undefined): string {
  if (!capitals || capitals.length === 0) return 'N/A'
  return capitals.join(', ')
}