import axios from 'axios';
const API_URL = 'http://localhost:5000/api/v1/order';

const cloudinaryUpload = async (data) => {
  const res = await axios.post(
    'https://api.cloudinary.com/v1_1/dkmdeg6fc/image/upload',
    data
  );
  return res;
};

const createOrder = async (orderDetails, auth) => {
  try {
    const res = await axios.post(API_URL, orderDetails, {
      headers: {
        Authorization: `Bearer ${auth}`
      }
    });
    return res;
  } catch (err) {
    return { status: 403 };
  }
};

const acceptOrder = async (orderId, auth) => {
  try {
    const res = await axios.put(`${API_URL}/${orderId}/accept`, orderId, {
      headers: {
        Authorization: `Bearer ${auth}`
      }
    });
    return res;
  } catch (err) {
    return { status: 403 };
  }
};

export default {
  cloudinaryUpload,
  createOrder
};
