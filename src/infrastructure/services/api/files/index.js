import axios from 'axios';

const apiURL = process.NODE_ENV === 'production' ? 'https://fsc-nemc-api.herokuapp.com/api/v1' : 'http://localhost:4000/api/v1';

export default {
    getAll: async () => {
        console.info(apiURL)
        const response = await axios.get(apiURL +'/files/data');

        return response.data
    }
}