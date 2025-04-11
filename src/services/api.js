import axios from 'axios';

const API_KEY = 'WRITE YOUR ACCESS KEY HERE';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data;
};