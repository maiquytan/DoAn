import { api } from '../api';
import { getCookie } from '../helper';


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

export const getBaseProduct = async (params = '', page = 1) => {
  try {
    const response = await api.get(`base_products/?q=${params}&page=${page}`);
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
    const response = await api.post(`/orders/`, params);
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}


export const getOrders = async (params) => {
  try {
    const response = await api.get(`/orders/`);
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}

export const getOrderDetail = async (id) => {
  try {
    const response = await api.get(`/orders/${id}/`);
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data || null
  }
}


export const getSizes = async (params) => {
  try {
    const response = await api.get(`/sizes/`);
    return response.data
  } catch (error) {
    return null
  }
}

export const getTypes = async (params) => {
  try {
    const response = await api.get(`/types/`);
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}

export const getColors = async (params) => {
  try {
    const response = await api.get(`/colors/`);
    return response.data
  } catch (error) {
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
