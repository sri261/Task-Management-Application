import React from "react";
import ProjectTopBarComponent from "./ProjectTopBarComponent/ProjectTopBarComponent";
import "./ProjectComponent.css";
import CardComponent from "./CardComponent/CardComponent";

function ProjectComponent() {
  return (
    <div className="project-component">
      <ProjectTopBarComponent />
      <CardComponent />
    </div>
  );
}

export default ProjectComponent;
