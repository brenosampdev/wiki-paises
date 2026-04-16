import { API } from "../api";
import { DETAILS_FIELDS } from "./fields";

function getCountryByCode(code: string) {
    return API.get(`/alpha/${code}`, { params: { fields: DETAILS_FIELDS } })
}

export default getCountryByCode