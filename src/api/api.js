import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';
//Fetching data from 'https://swapi.dev/api/starships'
const fetchStartshipList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/starships`);
        console.log(response.data);
        if (response.status === 200) {
            return response ? response.data : [];
          }
      } catch (error) {
        throw error;
      }
}

export default fetchStartshipList;
