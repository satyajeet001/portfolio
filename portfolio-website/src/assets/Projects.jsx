import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import projects from "./projectsDetails";

function DetailsFront(props) {
  return (
    <div className="details-front">
      <img src={props.image} alt="Project" className="project-image" />
      <h2>{props.name}</h2>
    </div>
  );
}

function DetailsBack(props) {
  return (
    <div className="details-back">
      <p>{props.description}</p>
    </div>
  );
}

function Projects() {
  const [isFlipped, setIsFlipped] = useState(
    Array(projects.length).fill(false)
  );
  const [selectedProject, setSelectedProject] = useState(null);

  function handleMouseEnter(index) {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[index] = true;
    setIsFlipped(newIsFlipped);
  }

  function handleMouseLeave(index) {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[index] = false;
    setIsFlipped(newIsFlipped);
  }

  function handleClick(project) {
    setSelectedProject(project);
  }

  return (
    <div className="projects-container" id="projects">
      <h1 className="project-heading">Projects</h1>
      <div className="cards-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleClick(project)}
          >
            <ReactCardFlip
              flipDirection="vertical"
              isFlipped={isFlipped[index]}
            >
              <div className="card card-front">
                <DetailsFront image={project.image} name={project.name} />
              </div>
              <div className="card card-back">
                <DetailsBack
                  name={project.name}
                  description={project.description}
                />
              </div>
            </ReactCardFlip>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
