import React from "react";
import Marquee from "react-fast-marquee";
import background from "/Images/color-sharp.png";

function Skills() {
  return (
    <div className="skill-content" id="skills">
      <h1>Skills</h1>
      <p>
        I have cultivated proficiency in a diverse range of skills through
        dedicated learning and practical experience. My capabilities extend to
        tech and non tech, allowing me to contribute effectively in multiple
        domains.
      </p>
      <Marquee pauseOnHover>
        <img src="Images/react.png" alt="logo" />
        <img src="Images/nodejs.png" alt="logo" />
        <img src="Images/html.png" alt="logo" />
        <img src="Images/css.png" alt="logo" />
        <img src="Images/javascript.png" alt="logo" />
        <img src="Images/c++.png" alt="logo" />
        <img src="Images/python.png" alt="logo" />
        <img src="Images/express.png" alt="logo" />
        <img src="Images/bootstrap.png" alt="logo" />
        <img src="Images/flask.png" alt="logo" />
        <img src="Images/github.png" alt="logo" />
        <img src="Images/mysql.png" alt="logo" />
        <img src="Images/mongodb.png" alt="logo" />
      </Marquee>
    </div>
  );
}

export default Skills;
