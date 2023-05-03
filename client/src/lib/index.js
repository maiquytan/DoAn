import { api } from '../api';
import { getCookie } from '../helper';
import axios from 'axios';
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from '../reducers/app.js';


export const register = async (user, dispatch, history) => {
  dispatch(registerStart());
  try {
    await axios.post('http://localhost:4000/api/auth/register', user);
    dispatch(registerSuccess())
    history.push("/login");
  } catch (error) {
    dispatch(registerFailed())
  }
}

export const login = async (user, dispatch, history) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:4000/api/auth/login', user);
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem('expireTime', new Date().getTime() + 3600000);
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

export const getBaseProduct = async (page) => {
  try {
    const response = await api.get(`api/product?page=${page}`);
    return response.data
  } catch (error) {
    return null
  }
}
export const getBlogs = async (page) => {
  try {
    const response = await api.get(`api/blog/`);
    return response.data
  } catch (error) {
    return null
  }
}

export const createOrder = async (params, accessToken) => {
  try {
    const response = await api.post('api/order/createOrder',JSON.stringify(params),{
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    });

    return await response.json();
  } catch (error) {
    return error.response.data || null;
  }
}

export const getOrdersUser = async (accessToken) => {
  try {
    const response = await api.get(`api/order/user`, {
      headers: { Authorization: `Bearer ${accessToken}` }
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
