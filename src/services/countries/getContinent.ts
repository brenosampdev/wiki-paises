import { API }  from '../api'
import { HOME_FIELDS } from './fields'
import getAllCountries from './getAllCountries'

function getContinent (region? :string) {
    if (!region) {
        return getAllCountries()
    }
    return API.get(`/region/${region}`, { params:  { fields: HOME_FIELDS } })
}

export default getContinent