import axios from "axios";

const BASE_URL = 'http://192.168.100.8:8080/api/v1/profile'

export const setUsers = (query_strings, auth_token) => {
    const URL = BASE_URL + query_strings
    return axios.get(URL, {
        headers: {
            'Authorization': `Token ${auth_token}`
        }
    })
        .then(
            response => response,
            error => console.log(`AJAX ERROR ${error}`)
        )
}