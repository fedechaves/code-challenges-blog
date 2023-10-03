/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

const Products = ({ products }) => {
  return (
    <main className='products'>
      <ul>
        {products.slice(0,10).map(product => {
          return (
            <li key={product.id}>
              <img src={product.thumbnail}
                alt={product.title} />
              <div>
                <strong>{product.title} - ${product.price}</strong>
              </div>
              <div>
                <AddToCartIcon />
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Products
