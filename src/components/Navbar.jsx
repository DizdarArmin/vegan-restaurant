import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo" width="64"></img>
      </Link>
      <ul className="form-inline my-2 my-lg-0">
        <li className="nav-item mr-2">
          <NavLink to="/dishes">Dishes</NavLink>
        </li>
        <li className="nav-item mr-2">
          <NavLink to="/drinks">Drinks</NavLink>
        </li>
        <li className="nav-item mr-2">
          <NavLink to="/deserts">Deserts</NavLink>
        </li>
        <li className="nav-item mr-2">
          <NavLink to="/contact">Contact us!</NavLink>
        </li>
      </ul>
    </nav>
  );
}
