import axios from 'axios';
import type { Feedback } from '../types/feedback';

const API_BASE_URL = 'http://localhost:5000/api/v1';

const API = axios.create({
  baseURL: `${API_BASE_URL}/feedback`,
});

export const getFeedbacks = async (): Promise<Feedback[]> => {
  const res = await API.get('/');
  return res.data;
};

export const createFeedback = async (feedback: Omit<Feedback, '_id'>) => {
  const res = await API.post('/', feedback);
  return res.data;
};
