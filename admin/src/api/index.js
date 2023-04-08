import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 60000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}
