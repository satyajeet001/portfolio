import React, { useState, useEffect } from "react";

function Banner() {
  const professions = ["Web Developer", "Web Designer", "Video Editor"];
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [currentProfession, setCurrentProfession] = useState(professions[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfessionIndex(
        (prevIndex) => (prevIndex + 1) % professions.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [professions.length]);

  useEffect(() => {
    setCurrentProfession(professions[currentProfessionIndex]);
  }, [currentProfessionIndex, professions]);

  return (
    <div className="container text-center mt-4" id="home">
      <div className="row">
        <div className="col-6 banner-heading">
          <h1>Hello! Satyajeet here, a {currentProfession}</h1>
          <p>
            I am an experienced Full Stack Web Developer. I bring expertise in
            ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, JavaScript, C++,
            Microsoft Power BI and OOPs, coupled with a collaborative spirit
            developed through active participation in college events.
          </p>
        </div>
        <div className="col-6">
          <img className="banner-img" src="/Images/astronaut.png" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
