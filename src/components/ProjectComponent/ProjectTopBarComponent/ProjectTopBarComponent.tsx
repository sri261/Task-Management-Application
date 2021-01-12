import React from "react";
import { auth } from "../../../firebase/firebaseIndex";
import "./ProjectTopBarComponent.css";
function ProjectTopBarComponent() {
  return (
    <div className="project-top-bar">
      <h1>Project Name</h1>

      <button
        onClick={() => {
          auth().signOut();
        }}
      >
        Signout
      </button>
    </div>
  );
}

export default ProjectTopBarComponent;
