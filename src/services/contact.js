import axios from 'axios';
import ClientError from './client-error';

const getClient = () => axios.create({
  baseURL: 'https://shovel-portfolio-api.herokuapp.com/api',
  timeout: 5000,
});

const send = async (name, email, project, message) => {
  const client = getClient();
  try {
    const response = await client.post('/email', { name, email, project, message });
    return response.data;
  } catch (e) {
    if (e.response) {
      throw new ClientError(e.message, 'INVALID_FORM_DATA', e.response.status, e.response.data);
    }

    throw e;
  }
};

export { send };