import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <ul>
        <li> <Link to="/">&#47;&#47;Home </Link> </li>
        <li> <Link to="/Info">&#47;&#47;Info </Link> </li>
        <li> <Link to="/portifolio">&#47;&#47;Portifolio </Link> </li>
        <li> <Link to="/ContactMe">&#47;&#47;Contato </Link> </li>        
      </ul>
    </nav>
  )
}
export default Navbar