import { Link } from "react-router-dom";
import Logo from "./assets/initialT.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="logo" to="/home">
        <img src={Logo} alt="my initials" />
      </Link>
    </div>
  );
}

export default Navbar;
