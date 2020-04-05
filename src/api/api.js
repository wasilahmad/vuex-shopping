import axios from 'axios'

export default {
    fetchProducts() {
        return axios.get( process.env.BASE_URL + 'lessons.json')
        .then( response => {
            // console.log(response.data[0]);
            return response.data
        })
        .catch( error => console.log(error));
    }
}