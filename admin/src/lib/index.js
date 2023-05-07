import { api } from '../api';
import { getCookie } from '../helper';
import { getAllUser, removeOrder, removeUser } from '../reducers/app';
// import axios from 'axios';

export const register = async (params) => {
  try {
    const response = await api.post(`users`, params);
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const login = async (params) => {
  try {
    const response = await api.post(`o/token`, params);
    return response.data
  } catch (error) {
    return error.response.data
  }
}
export const getUsers = async (page) => {
  try {
    const response = await api.get(`api/user?page=${page}`);
    return response.data
  } catch (error) {
    return null
  }
}
export const deleteUsers = async (id,dispatch) => {
  try {
    await api.delete('api/user/'+ id);
    dispatch(removeUser(id))
  } catch (error) {
    return error
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
    const response = await api.post(`api/order/`, params);
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}

export const createProduct = async (params) => {
  try {
    const response = await api.post(`api/product/create`, params);
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}

export const getOrders = async (page) => {
  try {
    const response = await api.get(`api/order/?page=${page}`);
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}
export const deleteOrders = async (id,dispatch) => {
  try {
    await api.delete('api/order/'+ id);
    dispatch(removeOrder(id))
  } catch (error) {
    return error
  }
}

export const getOrderDetail = async (id) => {
  try {
    const response = await api.get(`api/order/${id}/`);
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data || null
  }
}


export const getInputs = async (params) => {
  try {
    const response = await api.get(`/inputs/`);
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getInputDetail = async (id) => {
  try {
    const response = await api.get(`/inputs/${id}`);
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const createInput = async (params) => {
  try {
    const response = await api.post(`/inputs/`, params, {
      headers: { Authorization: `Bearer ${getCookie('access_token')}`, }
    });
    return response.data
  } catch (error) {
    // return error.response.data || null
    console.log(error)
    return null
  }
}

export const createBaseProduct = async (params) => {
  try {
    let formData = new FormData()
    Object.keys(params).forEach(key => {
      formData.append(`${key}`, params[key])
    })
    const response = await api.post(`/base_products/`, formData, {
      headers: { Authorization: `Bearer ${getCookie('access_token')}`, }
    })
    return response.data
  }
  catch (error) {
    return {
      status: error.status,
      error: error.response.data
    }
  }
}

export const createColorProduct = async (params) => {
  try {
    let formData = new FormData()
    Object.keys(params).forEach(key => {
      formData.append(`${key}`, params[key])
    })
    const response = await api.post(`/product_colors/`, formData, {
      headers: { Authorization: `Bearer ${getCookie('access_token')}`, }
    })
    return response.data
  }
  catch (error) {
    return {
      status: error.status,
      error: error.response.data
    }
  }
}

export const updateStatusOrder = async (id, params) => {
  try {
    const response = await api.patch(`/orders/${id}/`, params, {
      headers: { Authorization: `Bearer ${getCookie('access_token')}`, }
    })
    return response.data
  } catch (error) {
    return {
      status: error.status,
      error: error.response.data
    }
  }
}
