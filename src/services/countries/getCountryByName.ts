import { API }  from '../api'
import { HOME_FIELDS } from './fields';

function getCountryByName(name: string) {
  return API.get(`/name/${name}`, { params: { fields: HOME_FIELDS } })
}

export default getCountryByName