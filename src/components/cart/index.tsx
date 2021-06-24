import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  selectCart,
  addToCart,
  removeFromCart,
  countsCartTotal,
} from './cartSlice'
import ProductType from '../../app/interfaces/ProductType'
import CartStateType from '../../app/interfaces/CartStateType'
import styles from './Cart.module.scss'

function Cart() {
  // Create new state state
  const cart: CartStateType = useAppSelector(selectCart)

  const dispatch = useAppDispatch()

  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    dispatch(countsCartTotal())
  }, [cart])

  return (
    <div className={`${styles.cart} my-3`}>
      <h5>Cart :</h5>
      <ul className="list-group">
        {cart.products.length === 0 && (
          <li className="list-group-item font-italic">Cart is empty...</li>
        )}
        {cart.products.map((product: ProductType) => {
          if (product.quantity && product.quantity > 0) {
            return (
              <li className="list-group-item" key={product.id}>
                <span className="d-block text-truncate">
                  <span className="font-weight-bold">{product.title}</span>
                </span>
                <span className="mr-2 float-right">{product.price}€</span>
                <button
                  type="button"
                  className="btn btn-primary badge badge-primary badge-pill"
                  onClick={() => {
                    dispatch(removeFromCart(product))
                  }}
                >
                  -
                </button>
                <span className="bg-light mx-2">{product.quantity}</span>
                <button
                  type="button"
                  className="btn btn-primary badge badge-primary badge-pill"
                  onClick={() => {
                    dispatch(addToCart(product))
                  }}
                >
                  +
                </button>
              </li>
            )
          }
        })}
        {cart.products.length > 0 && (
          <li className="list-group-item">
            Total : <span className="float-right">{cart.total}</span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Cart
