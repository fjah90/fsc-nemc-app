import axios from 'axios';

const apiURL = 'https://fsc-nemc-api.herokuapp.com/api/v1';

export default {
    getAll: async () => {
        const response = await axios.get(apiURL +'/files/data');

        return response.data
    }
}