import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => (
          <ProjectItem
            key={idx}
            name={project.name}
            image={project.image}
            link={project.link} // Pass the link to ProjectItem
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
