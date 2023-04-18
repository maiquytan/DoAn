import { createSlice } from '@reduxjs/toolkit'
import { getCookie, updateAccess } from '../helper'

export const initialState = {
  information: {},
  login: {
    currentUser: null,
    isFetching: false,
    error: false
  },
  register: {
    success: false,
    isFetching: false,
    error: false
  },
  product: {},
  isLogedIn: typeof document !== 'undefined' && !!getCookie('access_token'),
  previewProduct: {},
  cart: typeof document !== 'undefined' ? JSON.parse(localStorage.getItem('bibyCart')) || [] : [],
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.success = true;
      state.register.error = false;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.success = false;
      state.register.error = true;
    },
    logout(state, action) {
      state.information = null
      state.isLogedIn = false
      updateAccess(null)
    },
    getProduct(state, action) {
      state.product = action.payload
    },
    setUserInfor(state, action) {
      if (!action.payload.code && getCookie('access_token')) {
        state.isLogedIn = true
        state.information = action.payload
      }
    },
    setPreviewProduct(state, action) {
      state.previewProduct = action.payload
    },
    clearPreviewProduct(state) {
      state.previewProduct = {}
    },
    setProductToCart(state, action) {
      const isProductExist = state.cart.find(item => item.id === action.payload.id)
      if (isProductExist) {
        state.cart = state.cart.map(item => {
          if (item.id === action.payload.id)
            return action.payload
          return item
        })
      }
      else
        state.cart = [...state.cart, action.payload]

      localStorage.setItem('bibyCart', JSON.stringify(state.cart))
    },
    addToCart(state, action) {
      const isProductExist = state.cart.find(item => item.id === action.payload.id)
      if (isProductExist) {
        state.cart = state.cart.map(item => {
          if (item.id === action.payload.id) item.quantity += 1
          return item
        })
      }
      else
        state.cart = [...state.cart, action.payload]

      localStorage.setItem('bibyCart', JSON.stringify(state.cart))
    },
    removeFromCart(state, action) {
      const isProductExist = state.cart.find(item => item.id === action.payload.id)
      if (isProductExist)
        state.cart = state.cart.filter(item => item.id !== action.payload.id)
      localStorage.setItem('bibyCart', JSON.stringify(state.cart))
    },
    decreaseFromCart(state, action) {
      const isProductExist = state.cart.find(item => item.id === action.payload.id)
      if (isProductExist)
        state.cart = state.cart.map(item => {
          // if (item.quantity <= 0)
          if (item.id === action.payload.id) item.quantity -= 1
          return item
        })
      localStorage.setItem('bibyCart', JSON.stringify(state.cart))
    },
    clearCart(state) {
      state.cart = []
      localStorage.setItem('bibyCart', JSON.stringify(state.cart))
    },
  }
})

export const { actions } = slice
export const { loginStart, loginSuccess, loginFailed, registerStart, registerSuccess, registerFailed } = slice.actions;
// export const useDashboardSlice = () => {
//   useInjectReducer({ key: slice.name, reducer: slice.reducer })
//   useInjectSaga({ key: slice.name, saga: dashboardSaga })
//   return { actions: slice.actions }
// }

export default slice.reducer
