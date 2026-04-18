// src/ui/pages/CountryDetail.tsx
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import type { DTOCountry } from "../../types/country/DTOCountry"
import getCountryByCode from "../../services/countries/getCountryByCode"

import CountryHero from "../components/details/CountryHero"
import CountryInfos from "../components/details/CountryInfos"
import CountryReadMore from "../components/details/CountryReadMore"
import LoadingState from "../components/shared/LoadingState"
import ErrorState from "../components/shared/ErrorState"

function CountryDetail() {
  const { code } = useParams<{ code: string }>()

  const [country, setCountry] = useState<DTOCountry | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!code) return

    const fetchCountry = async () => {
      setLoading(true)
      setError(null)
      try {
        const { data } = await getCountryByCode(code)
        setCountry(data)
      } catch (err) {
        setError("País não encontrado")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCountry()
  }, [code])

  return (
    <>
      {loading && <LoadingState />}
      {error && <ErrorState message={error} />}
      <main className="px-6 md:px-20 py-10 flex flex-col gap-10">
        {country && (
          <>
            <CountryHero country={country} />
            <CountryInfos country={country} />
            <CountryReadMore country={country} />
          </>
        )}
      </main>
    </>
  )
}

export default CountryDetail