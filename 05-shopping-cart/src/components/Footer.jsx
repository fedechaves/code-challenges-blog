import './Footer.css'
import { useFilters } from '../hooks/useFilters'

// eslint-disable-next-line react/prop-types
const Footer = () => {
  const { filters } = useFilters()
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {/* <h4>Prueba técnica de React ⚛️ － <span>@fedechaves</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  )
}

export default Footer
