import axios from 'axios';
const API_URL = 'http://localhost:5000/api/v1';

const registerUser = async (userDetails) => {
  try {
    const res = await axios.post(`${API_URL}/auth/register`, userDetails);
    return res;
  } catch (error) {
    console.log(error.message);
    return { status: 409 };
  }
};

const loginUser = async (userDetails) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, userDetails);
    return res;
  } catch (error) {
    console.log(error.message);
    return { status: 403 };
  }
};

const verifyUser = async (token, userId) => {
  const res = await axios.get(
    `${API_URL}/auth/verify/${userId}?token=${token}`
  );
  return res;
};

const resetPassword = async (userDetails, token) => {
  try {
    const res = await axios.post(
      `${API_URL}/auth/reset?token=${token}`,
      userDetails
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

const forgotPasword = async (payload) => {
  try {
    const res = await axios.post(`${API_URL}/auth/forgot`, payload);
    return res;
  } catch (err) {
    console.log(err.message);
    return { status: 404 };
  }
};

const userProfile = async (auth) => {
  try {
    const res = await axios.get(`${API_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${auth}`
      }
    });
    return res;
  } catch (error) {
    console.log(error.message);
    return { status: 401 };
  }
};

export default {
  registerUser,
  loginUser,
  verifyUser,
  forgotPasword,
  resetPassword,
  userProfile
};
