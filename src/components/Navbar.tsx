import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
    <ul>
        <li>&#47;* <Link to="/">Home </Link> </li>
        <li> <Link to="/Info">Info </Link> </li>
        <li> <Link to="/Portifa">Portifolio </Link> </li>
        <li> <Link to="/ContactMe">Contato </Link> *&#47;</li>     
          
      </ul>
    </nav>
  )
}
export default Navbar