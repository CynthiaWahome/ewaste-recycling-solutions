import axios from 'axios';
const API_URL = 'http://localhost:5000/api/v1';

const registerUser = async (userDetails) => {
  const res = await axios.post(`${API_URL}/auth/register`, userDetails);
  return res;
};

const loginUser = async (userDetails) => {
  const res = await axios.post(`${API_URL}/auth/login`, userDetails);
  return res;
};

export default {
  registerUser,
  loginUser
};
