import Axios from 'axios';
import { addBaseInterceptors } from './axiosInterceptors';

export const nasaInstance = Axios.create({
  baseURL: 'https://api.nasa.gov',
});

addBaseInterceptors(nasaInstance);
