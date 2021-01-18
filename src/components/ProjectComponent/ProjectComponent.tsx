import React, { useState } from "react";

import ProjectTopBarComponent from "./ProjectTopBarComponent/ProjectTopBarComponent";
import "./ProjectComponent.css";
import StatusCol from "./StatusCol/StatusCol";
import Navbar from "./Navbar/Navbar";
import Modal from "../Modal/Modal";

export const ProjectContext: any = React.createContext(false);

function ProjectComponent() {
  const [showModal, setShowModal]: any = useState();
  return (
    <ProjectContext.Provider value={{ showModal, setShowModal }}>
      <div className="project-component">
        <Navbar />
        {showModal ? (
          <Modal />
        ) : (
          <div className="project-component-sub">
            <ProjectTopBarComponent />
            <div className="status-cols">
              <StatusCol status="Task Ready" />
              <StatusCol status="In Progress" />
              <StatusCol status="Needs Review" />
              <StatusCol status="Done" />
            </div>
          </div>
        )}

        {/* <button
          onClick={() => {
            showModal ? setShowModal(false) : setShowModal(true); /// temp for testing
          }}
        >
          MODAL
        </button> */}
      </div>
    </ProjectContext.Provider>
  );
}

export default ProjectComponent;
