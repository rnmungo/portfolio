import axios from 'axios';

const getClient = () => axios.create({
  baseURL: 'https://shovel-portfolio-api.herokuapp.com/api',
  timeout: 15000,
});

const sendMessage = async (query) => {
  const client = getClient();
  const response = await client.post('/bot', { query });
  return response.data;
};

export { sendMessage };