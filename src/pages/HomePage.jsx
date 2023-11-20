import React from "react";
import "./HomePage.scss";
import AnimatedTagline from "../page_functions/AnimatedTagline";

function Homepage() {
  return (
    <div className="mainroute">
      <h1 className="header">Hi, I'm T!</h1>
      <AnimatedTagline />
      <div className="skills-and-socials">
        <p className="skills">
          <button>Projects</button>
        </p>
        <p className="socials">
          <button>Profile</button>
          <button>Contact</button>
        </p>
      </div>
      <button></button>
    </div>
  );
}

export default Homepage;
