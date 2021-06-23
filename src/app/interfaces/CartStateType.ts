import ProductType from './ProductType'

export default interface CartStateType {
  products: ProductType[]
  total: number
}
