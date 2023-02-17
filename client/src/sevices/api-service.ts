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

const fetchWheel = async (id: string | number) => {
  const { data } = await api.get<WheelModel>(`/wheels/${id}`);


return data;
};

const createWheel = async (wheelData: Omit<WheelModel, 'id'>) => {
  await api.post('/wheels', {
    brand: wheelData.brand,
    model: wheelData.style,
    price: wheelData.price,
    images: wheelData.images,
  });
};

const deleteWheel = async (id: string) => {
  await api.delete(`wheels/${id}`);
};

const updateWheel = async (id: string, wheelData: Omit<WheelModel, 'id'>) => {
  await api.patch(`wheels/${id}`, {
    brand: wheelData.brand,
    model: wheelData.style,
    price: wheelData.price,
    images: wheelData.images,
  });
};
const ApiService = {
  fetchWheels,
  fetchWheel,
  createWheel,
  deleteWheel,
  updateWheel,
};

export default ApiService;