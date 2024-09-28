import axios from 'axios';
const API_URL = 'http://localhost:5000/api/v1/order';
const GOOGLE_MAPS_API_KEY = 'AIzaSyBtOtH6MfeRqJmV-m-Qwla2gao4JQfGsZo';

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
    return err.response;
  }
};

const acceptOrder = async (orderId, auth) => {
  try {
    const res = await axios.put(
      `${API_URL}/${orderId}/accept`,
      {},
      {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};

const getAllOrders = async (auth) => {
  try {
    const resp = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${auth}`
      }
    });
    return resp;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

const reverseGeocode = async (lat, lng) => {
  try {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`
    );

    if (res.data.status === 'OK') {
      const address = res.data.results[0].formatted_address;
      return address;
    } else {
      throw new Error('Geocoding failed: ' + res.data.status);
    }
  } catch (error) {
    console.error('Error in reverse geocoding:', error);
    throw error;
  }
};

export default {
  cloudinaryUpload,
  createOrder,
  acceptOrder,
  getAllOrders,
  reverseGeocode
};
