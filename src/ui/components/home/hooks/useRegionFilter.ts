import { useSearchParams } from "react-router-dom"

export const CONTINENTS = ['Americas', 'Europe', 'Asia', 'Africa', 'Oceania'] as const

export function useRegionFilter() {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentRegion = searchParams.get("region")
    
    const selectCurrentRegion = (region: string | null) => {
        setSearchParams(params => {
            const parameters = new URLSearchParams(params)
            if (region) {
                parameters.set('region', region)
            } else {
                parameters.delete('region')
            }
            parameters.delete('page')  // reseta paginação ao mudar filtro
            return parameters
        })
    }
    
    return { currentRegion, selectCurrentRegion, continents: CONTINENTS }
}