import React from "react";
import "./Profile.scss";

function Profile() {
  return (
    <div className="profilepage">
      <div className="timeline">
        <h1>EXPERIENCE</h1>
        <div className="time-container">
          <ul>
            <li className="exp-left">
              <div className="padding">
                <h2 className="exp-title">Web Developer</h2>
                <p className="exp-content">
                  Collaborated effectively with team members and stakeholders to
                  design and develop responsive websites for multiple research
                  groups, resulting in improved online presence and
                  accessibility to research information.
                </p>
                <span className="circle"></span>
              </div>
            </li>
            <li className="exp-right">
              <div className="padding">
                <h2 className="exp-title">Sales Assistant</h2>
                <p className="exp-content">
                  Maintained a consistently high level of customer service,
                  helping customers with special orders and unique product
                  requests, enhancing their shopping experience. Resulting in
                  positive feedback and increased customer satisfaction and
                  loyalty.
                </p>
                <span className="circle"></span>
              </div>
            </li>
            <li className="exp-left">
              <div className="padding">
                <h2 className="exp-title">Treasurer</h2>
                <p className="exp-content">
                  Successfully managed a substantial budget of over £10,000, for
                  one the university's biggest student societies. Maintaining
                  accurate financial records, tracking income and expenses, to
                  ensure funds are utilized efficiently.
                </p>
                <span className="circle"></span>
              </div>
            </li>
            <li className="exp-right">
              <div className="padding">
                <h2 className="exp-title">Customer Service Rep</h2>
                <p className="exp-content">
                  Consistently provided accurate and timely infection control
                  advice, contributing to the prevention and mitigation of the
                  spread of COVID-19 within communities. Contributed to process
                  improvements aimed at enhancing service delivery, sharing
                  insights and suggestions
                </p>
                <span className="circle"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="about">
        <h1>ABOUT ME</h1>
        <p>
          I successfully completed my bachelor's degree in engineering, and got
          the opportunity to intern at a start-up which enabled me to try out
          different roles and allowed me to discover my areas of interest.
        </p>
        <p>
          During my undergraduate studies, I was introduced to programming
          through modules that involved using MATLAB to automate mathematical
          operations and integrating C programming into embedded devices. This
          exposure ignited my strong passion for programming and technology. To
          further challenge myself, I embarked on a self-taught journey to
          acquire the necessary skills, and I applied this newfound knowledge to
          my dissertation, where I leveraged it to enhance my data analysis and
          modelling using MATLAB.
        </p>
        <p>
          I realized that this self-directed learning provided the mental
          stimulation I craved in a job. As a result, I pursued a master’s
          degree in Computer Science to establish a solid foundation and develop
          the requisite skills for a career in the tech industry. This journey
          has led me to this exciting opportunity, and I'm thrilled to be here
          today
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default Profile;
