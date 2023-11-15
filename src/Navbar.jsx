import { Link, NavLink } from "react-router-dom";
import Logo from "./assets/initialT.svg";
import "./Navbar.scss";

import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import WebhookTwoToneIcon from "@mui/icons-material/WebhookTwoTone";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <img className="logo" src={Logo} alt="my initial as logo" />
        </li>

        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item-inactive"
            }
          >
            <CottageTwoToneIcon />
            <span className="nav-item-text">Home</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item-inactive"
            }
          >
            <PersonOutlineTwoToneIcon />
            <span className="nav-item-text">Profile</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item-inactive"
            }
          >
            <WebhookTwoToneIcon />
            <span className="nav-item-text">Projects</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item-inactive"
            }
          >
            <AlternateEmailTwoToneIcon />
            <span className="nav-item-text">Contact</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item-inactive"
            }
          >
            <SettingsTwoToneIcon />
            <span className="nav-item-text">Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
