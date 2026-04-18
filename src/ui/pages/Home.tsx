import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import type { DTOCountry } from "../../types/country/DTOCountry"

import getContinent from "../../services/countries/getContinent"
import getAllCountries from "../../services/countries/getAllCountries"

import Hero from "../components/home/HomeHero"
import FilterBar from "../components/home/FilterBar"
import CountryList from "../components/home/CountryCardList"
import LoadingState from "../components/shared/LoadingState"
import ErrorState from "../components/shared/ErrorState"

import { filterCountriesByName } from "../components/home/utils/utilities"

function Home() {
    const [countries, setCountries] = useState<DTOCountry[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState('')
    
    const region = searchParams.get("region")
    const page = Number(searchParams.get('page') ?? '1')

    const PER_PAGE = 8
    const filteredCountries = filterCountriesByName(countries, search)
    const totalPages = Math.ceil(filteredCountries.length / PER_PAGE)
    const pageSlice = filteredCountries.slice((page - 1) * PER_PAGE, page * PER_PAGE)

    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: String(newPage) })
    }

    const handleSearchChange = (newSearch: string) => {
        setSearch(newSearch)
        setSearchParams(prev => {
            const next = new URLSearchParams(prev)
            next.delete('page')
            return next
        })
    }
    
    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true)
            setError(null)
            try {
                const { data } = region ? await getContinent(region) : await getAllCountries()
                setCountries(data)
            } catch (err) {
                setError("Unable to load countries. Please try again later.")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        
        fetchCountries()
    }, [region])

    return (
        <>
            <Hero/>
            <FilterBar search={search} onSearchChange={handleSearchChange}/>
            {loading && <LoadingState />}
            {error && <ErrorState message={error} />}
            {!loading && !error && (
                <CountryList 
                    countries={pageSlice}
                    totalCountries={filteredCountries.length}
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    searchTerm={search} 
                />
            )}
        </>
    )
}

export default Home