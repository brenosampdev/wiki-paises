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
}

export type { DTOCountry }