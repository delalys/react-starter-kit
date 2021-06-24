/**
 * ProductList Page
 *
 */

import React from 'react'
import Product from '../../components/product'
import Cart from '../../components/cart'

export default function ProductList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <h5 className="mt-3">Products :</h5>
            <Product />
        </div>
        <div className="col-sm-3">
          <Cart />
        </div>
      </div>
    </div>
  )
}
