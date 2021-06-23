import React from 'react'
import logo from './logo.svg'
import ProductList from './containers/ProductList'

// CSS
import './App.scss'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  )
}

export default App