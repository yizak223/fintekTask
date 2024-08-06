import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: {
    key: '176bd7c97f134eae80c164903240508',
  }
});

export default apiClient;
