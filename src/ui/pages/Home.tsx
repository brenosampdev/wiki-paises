import Header from "../components/shared/Header"
import Hero from "../components/home/Hero"
import FilterBar from "../components/home/FilterBar"
import CountryList from "../components/home/CountryList"
import Footer from "../components/shared/Footer"

function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <FilterBar/>
            <CountryList/>
            <Footer/>
        </>
    )
}

export default Home