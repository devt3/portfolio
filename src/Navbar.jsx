import { Link } from "react-router-dom";
import Logo from "./assets/initialT.svg";
import "./Navbar.scss";

import CottageIcon from "@mui/icons-material/Cottage";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="logo" to="/home">
        <img src={Logo} alt="my initials" />
      </Link>

      <nav className="navbar-nav">
        <ul>
          <li className="nav-item">
            <Link className="nav-item" to="/home">
              Home
              <CottageIcon />
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-item" to="/home">
              Profile
              <CottageIcon />
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-item" to="/home">
              Projects
              <CottageIcon />
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-item" to="/home">
              Contact
              <CottageIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
