import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  information: {},
  previewProduct: {},
  cart: typeof document !== 'undefined' ? JSON.parse(localStorage.getItem('bibyCart')) || [] : [],
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
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
