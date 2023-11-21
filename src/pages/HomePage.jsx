import React, { useEffect } from "react";
import "./HomePage.scss";
import AnimatedTagline from "../page_functions/AnimatedTagline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";

function Homepage() {
  const skillsList = [
    "Amazon Web Services",
    "Java",
    "Spring Framework",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "MySQL",
    "PostgreSQL",
    "MATLAB",
    "Autodesk Inventor",
    "Ansys Workbench",
    "MacOS",
    "Windows OS",
  ];
  // let arrayLength = skillsList.length;

  // for (let i = 0; i < arrayLength; i++) {
  //   $('<div class="results" />').text(skillsList[i]).appendTo("body");
  // }

  const skillsToList = document.getElementsByClassName("skills-and-socials");

  return (
    <div className="mainroute">
      <h1 className="header">Hi, I'm T!</h1>
      <AnimatedTagline />
      <div className="skills-and-socials">
        <div className="skills">
          <p className="skills-title">SKILLS</p>
          <div className="skillsList">
            <div className="skill-item">Amazon Web Services</div>
            <div className="skill-item">Java</div>
            <div className="skill-item">Spring Framework</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">TypeScript</div>
            <div className="skill-item">React</div>
            <div className="skill-item">HTML</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">MySQL</div>
            <div className="skill-item">PostgreSQL</div>
            <div className="skill-item">MATLAB</div>
            <div className="skill-item">Autodesk Inventor</div>
            <div className="skill-item">Ansys Workbench</div>
            <div className="skill-item">MacOS</div>
            <div className="skill-item">Windows OS</div>
          </div>

          <Link to={"/projects"} className="button">
            Projects
          </Link>
        </div>

        <div className="socials">
          <p className="socials-title">SOCIALS</p>
          <div className="socialsList">
            <div className="social-item">
              <GitHubIcon />
            </div>
            <div className="circleSVG">
              <CircleIcon />
            </div>
            <div className="circleSVG">
              <CircleIcon />
            </div>
            <div className="social-item">
              <LinkedInIcon />
            </div>
          </div>

          <div className="social-buttons">
            <Link to={"/profile"} className="button">
              Profile
            </Link>
            <Link to={"/contact"} className="button">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
