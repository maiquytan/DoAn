import { createSlice } from '@reduxjs/toolkit'
import { getCookie, updateAccess } from '../helper'

export const initialState = {
  information: {},
  isLogedIn: typeof document !== 'undefined' && !!getCookie('access_token'),
  previewProduct: {},
  cart: typeof document !== 'undefined' ? JSON.parse(localStorage.getItem('bibyCart')) || [] : [],
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload.access_token) {
        state.isLogedIn = true
        updateAccess(action.payload.access_token)
      }
    },
    logout(state, action) {
      state.information = null
      state.isLogedIn = false
      updateAccess(null)
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

// export const useDashboardSlice = () => {
//   useInjectReducer({ key: slice.name, reducer: slice.reducer })
//   useInjectSaga({ key: slice.name, saga: dashboardSaga })
//   return { actions: slice.actions }
// }

export default slice.reducer
