type Flags = {
    alt? : string,
    png? : string,
    svg? : string
}

type Name = {
    common: string,
    official: string
}

type DTOCountry = {
    capital? : string[],
    cca3: string
    flags: Flags
    name: Name
    population: number, 
    region: string,
    subregion?: string
    area: number
    continents?: string[]
    languages?: Record<string, string>
    currencies?: Record<string, { name: string; symbol: string }>
}

export type { DTOCountry }