import React, { useEffect, useState } from 'react'

import { useAppDispatch } from '../../app/hooks'
import { addToCart } from '../cart/cartSlice'
import styles from './Product.module.scss'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import TextTruncate from 'react-text-truncate'
import ProductType from '../../app/interfaces/ProductType'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Product: React.FC<Props> = () => {
  const [state, setState] = useState([])

  const dispatch = useAppDispatch()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((response) => setState(response))
  })

  return (
    <div className={styles.product}>
      <div className="row text-center">
        {state.map((product: ProductType) => {
          return (
            <div className="col-sm-4 mb-4" key={product.id}>
              <Card>
                <Card.Header className={styles['card-header']}>
                  <Card.Img variant="top" src={product.image} />
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <TextTruncate
                      line={1}
                      truncateText="…"
                      text={product.title}
                    />
                  </Card.Title>
                  <Card.Text>
                    <TextTruncate
                      line={2}
                      truncateText="…"
                      text={product.description}
                    />
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(addToCart(product))
                    }}
                  >
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Product
