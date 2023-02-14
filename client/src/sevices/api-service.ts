import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5019',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchWheels = async () => {
  const { data } = await api.get<WheelModel[]>('/wheels');

  return data;
};

const ApiService = {
  fetchWheels,
};

export default ApiService;