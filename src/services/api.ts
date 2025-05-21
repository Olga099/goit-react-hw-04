import axios from 'axios';
import { FetchImagesResponse } from '../types';

const API_KEY = 'WRITE YOUR ACCESS KEY HERE';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query: string, page: number): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data;
};
