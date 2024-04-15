import axios from 'axios';

const callApi = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default callApi;

