import type { DTOCountry } from '../../types/country/DTOCountry'
import { API }  from '../api'
import { HOME_FIELDS } from './fields'

function getAllCountries() {
    return API.get<DTOCountry>('all', { params: { fields: HOME_FIELDS } })
}

export default getAllCountries