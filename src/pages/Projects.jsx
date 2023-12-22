import React from "react";

import "./Projects.scss";

function Projects() {
  return (
    <>
      <div className="project-grid">
        <div className="project">
          <div className="project-text">
            <h1>PROJECTS</h1>
          </div>
          <div className="project-tech"></div>
        </div>
        <div className="project">
          <div className="project-text">
            <h1>Algorithm Visualiser</h1>
            <p className="tech">
              <span>TypeScript</span>
              <span> HTML</span>
              <span> CSS</span>
              <span> React</span>
              <span> HTML Canvas</span>
            </p>
            <p>
              Developed a Web-based Algorithm Animation Tool to simplify
              algorithm comprehension for students and educators. The HTML
              Canvas was used as the rendering engine and animation system,
              which allowed for real-time graphics rendering and better
              performance in handling complex scenes.
            </p>
            <p>
              This was a particularly interesting project which honed my skills
              in UX/UI design, data visualization, and problem-solving.
            </p>
          </div>
          {/* <div className="project-tech">TypeScript HTML CSS React</div> */}
        </div>
        <div className="project">
          <div className="project-text">
            <h1>Assistive Robot</h1>
            <p className="tech">
              <span>MATLAB</span>
              <span> Autodesk Inventor</span>
            </p>
            <p>
              Focused on the design and development of an Assistive Robot aimed
              at aiding elderly and disabled individuals in their daily tasks,
              ultimately enhancing their quality of life. Employed a hexapod
              structure with a Stewart platform for stability. The project
              involved in-depth analysis, modelling, and validation using
              MATLAB, Denavit-Hartenberg parameters, Peter Corke Robotics
              Toolbox, and custom programming to assess the robot's kinematics.
            </p>
            <p>
              The outcome was a functional CAD-designed prototype of the
              hexapod, along with successful analysis and modelling of its
              capabilities.
            </p>
          </div>
          {/* <div className="project-tech">• MATLAB • Autodesk Inventor</div> */}
        </div>
        <div className="project">
          <div className="project-text">
            <h1>Location-Based Restaurant Web-Application</h1>
            <p className="tech">
              <span>Java</span>
              <span> Spring Framework</span>
              <span> MySQL</span>
              <span> Spring Security</span>
            </p>
            <p>
              Led the backend team in an 11-week collaborative project to
              develop a Location-Based Restaurant Finding Application.
              Strengthened skills in Java, Spring Framework, and MySQL by
              focusing on user functionality, implementing Signup/Login features
              using Spring Security, and managing user methods.
            </p>
            <p>
              Orchestrated efficient project management through Microsoft Teams
              and GitHub, while actively contributing to backend testing and
              meticulous documentation of the Test Plan.
            </p>
          </div>
          {/* <div className="project-tech">
            • Java • Spring Framework • MySQL • Spring Security
          </div> */}
        </div>

        <div className="project">
          <div className="project-text">
            <h1>Autonomous vehicle</h1>
            <p className="tech">
              {/* <span>Tinkercad</span> */}
              <span> Arduino</span>
              <span> C++</span>
              <span> LabVIEW</span>
              <span> Fuzzy Logic</span>
            </p>
            <p>
              Created an Arduino-controlled autonomous tracked vehicle
              resembling a tank to monitor red squirrel populations in forests.
              Equipped with sensors (ultrasonic, light, magnetometer), it
              relayed data to a LabVIEW interface. LabVIEW facilitated data
              display, control decisions, and transmission back to the vehicle.
              Using a differential drive system, it maneuvered based on relative
              wheel speeds.
            </p>
            <p>
              In automatic mode, a Fuzzy Logic Controller guided the vehicle,
              avoiding trees while heading southward. Implemented Tinkercad
              circuits and LabVIEW programming for this project.
            </p>
          </div>
          {/* <div className="project-tech">
            Tinkercad • Arduino • C++ • LabVIEW • Fuzzy Logic Controller
          </div> */}
        </div>

        {/* <div>ncl Research Website</div> */}

        {/* <div className="important">Personal Website</div> */}
      </div>
    </>
  );
}

export default Projects;
