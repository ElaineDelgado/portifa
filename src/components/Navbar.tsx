import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="mb-12 lg:mb-24 justify-center flex lg:justify-end">
    <ul>
        <li>&#47;* <Link to="/">home </Link> </li>
        <li> <Link to="/Info">info </Link> </li>
        <li> <Link to="/Portifa">portifolio </Link> </li>
        <li> <Link to="/ContactMe">contato </Link> *&#47;</li>     
          
      </ul>
    </nav>
  )
}
export default Navbar