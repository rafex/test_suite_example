import logMessage from './logger.mjs';
import axios from 'axios';

const callApi = async (url) => {
  try {
    const response = await axios.get(url);
    logMessage(response.data, 'debug');
    return response;
  } catch (error) {
    logMessage(error, 'error');
  }
};

export default callApi;

