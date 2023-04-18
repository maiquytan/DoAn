import { api } from '../api';
import { getCookie } from '../helper';
import axios from 'axios';
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from '../reducers/app.js';


export const register = async (user,dispatch,history) => {
  dispatch(registerStart());
  try {
    const res = await axios.post('http://localhost:4000/api/auth/register', user);
    dispatch(registerSuccess())
    history.push("/login");
  } catch (error) {
    dispatch(registerFailed())
  }
}

export const login = async (user,dispatch,history) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:4000/api/auth/login', user);
    dispatch(loginSuccess(res.data))
    history.push("/");
  } catch (error) {
    dispatch(loginFailed())
  }
}

export const getUserInfor = async (params) => {
  try {
    const response = await api.get(`profiles/me`, {
      headers: { Authorization: `Bearer ${params || getCookie('access_token')}`, }
    });
    return response.data
  } catch (error) {
    return null
  }
}

export const getBaseProduct = async ( page ) => {
  try {
    const response = await api.get(`api/product?page=${page}`);
    return response.data
  } catch (error) {
    return null
  }
}

export const getProductColorsByBaseProductId = async (params) => {
  try {
    const response = await api.get(`/base_products/${params}/product_colors`);
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}

export const createOrder = async (params) => {
  try {
    const response = await api.post(`/orders/`, params, {
      headers: { Authorization: `Bearer ${getCookie('access_token')}`, }
    });
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}

export const getOrdersUser = async (params) => {
  try {
    const response = await api.get(`/orders/user`, {
      headers: { Authorization: `Bearer ${params || getCookie('access_token')}`, }
    });
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}


export const getSizes = async (params) => {
  try {
    const response = await api.get(`/sizes/`);
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}

export const getOrderDetail = async (id) => {
  try {
    const response = await api.get(`/orders/${id}`);
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data || null
  }
}
