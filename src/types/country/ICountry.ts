import { IDetails } from './IDetails'

export interface ICountry {
    capital?: string[],
    region: string,
    population: number,
    continents: string[],
    name: Record<string, {
        common: string,
        official: string
    }>
    currencies: Record<string, {
        symbol: string,
        name: string
    }>;
    flags: {
        png: string,
        svg: string,
        alt?: string
    };
    details: IDetails
}