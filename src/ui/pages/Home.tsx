import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import getContinent from "../../services/countries/getContinent"
import getAllCountries from "../../services/countries/getAllCountries"

import Header from "../components/shared/Header"
import Hero from "../components/home/Hero"
import FilterBar from "../components/home/FilterBar"
import CountryList from "../components/home/CountryList"
import Footer from "../components/shared/Footer"

import type { DTOCountry } from "../../types/country/DTOCountry"


function Home() {
    const [countries, setCountries] = useState<DTOCountry[]>([]);
    const [searchParams] = useSearchParams();
    
    const region = searchParams.get("region");
    
    useEffect(() => {
        function verifyRegion(region? : string) {
            if (region) {
                return getContinent(region)
            } else {
                return getAllCountries()
            }
        }
        
        const fetchContinents = async () => {
            try {
                const { data } = await verifyRegion()
                // const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error("Erro ao buscar países:", error);
            }
        };
        
        fetchContinents();
        
    }, [region])
    return (
        <>
            <Header/>
            <Hero/>
            <FilterBar/>
            <CountryList countries={countries}/>
            <Footer/>
        </>
    )
}

export default Home