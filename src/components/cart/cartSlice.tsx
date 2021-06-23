import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import CartStateType from '../../app/interfaces/CartStateType'

const initialState: CartStateType = {
  products: [],
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addToCart: (state, action) => {
      // added element's ID
      const addedElementId = action.payload.id
      // element in cart
      const elementAlreadyInCart = state.products.find(
        (el) => el.id === addedElementId,
      )
      // if element alreay in cart
      if (elementAlreadyInCart) {
        // +1 to quantity
        if (elementAlreadyInCart.quantity) {
          elementAlreadyInCart.quantity++
        }
      } else {
        // sets element's quantity to 1
        action.payload.quantity = 1
        // adds product to list
        state.products.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      // Removed element's ID
      const removedElementId = action.payload.id
      // element in cart
      const elementAlreadyInCart = state.products.find(
        (el) => el.id === action.payload.id,
      )
      // if element alreay in cart
      if (elementAlreadyInCart) {
        // -1 to quantity
        if (
          elementAlreadyInCart.quantity &&
          elementAlreadyInCart.quantity > 1
        ) {
          console.log('reducing')
          elementAlreadyInCart.quantity--
        } else if (
          elementAlreadyInCart.quantity &&
          elementAlreadyInCart.quantity === 1
        ) {
          console.log(state.products.filter((el) => el.id !== removedElementId))
          state.products = state.products.filter(
            (el) => el.id !== removedElementId,
          )
        }
      }
    },
    countsCartTotal: (state) => {
      let sum = 0
      for (const product of state.products) {
        if (product.quantity) {
          const test = product.price * product.quantity
          sum += test
        }
      }
      state.total = +sum.toFixed(3)
    },
  },
})

export const selectCart = (state: RootState) => state.cart

export const { addToCart, removeFromCart, countsCartTotal } = cartSlice.actions

export default cartSlice.reducer
