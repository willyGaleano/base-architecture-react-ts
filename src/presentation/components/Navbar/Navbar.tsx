import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
     <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
  )
}
