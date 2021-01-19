import React, { useState } from "react";
import { useSelector } from "react-redux";

import ProjectTopBarComponent from "./ProjectTopBarComponent/ProjectTopBarComponent";
import "./ProjectComponent.css";
import StatusCol from "./StatusCol/StatusCol";
import Navbar from "./Navbar/Navbar";
import CommentsModal from "../Modal/CommentsModal/CommentsModal";
import { ModalState } from "../../store/types";

function ProjectComponent() {
  const modalState = useSelector<ModalState>((state) => state.show);

  return (
    <>
      <div style={modalState ? { filter: "blur(2px)" } : {}}>
        <div className="project-component">
          <Navbar />

          <div className="project-component-sub">
            <ProjectTopBarComponent />
            <div className="status-cols">
              <StatusCol status="Task Ready" />
              <StatusCol status="In Progress" />
              <StatusCol status="Needs Review" />
              <StatusCol status="Done" />
            </div>
          </div>
        </div>
      </div>
      <div className="project-component-modal">
        {modalState ? <CommentsModal /> : null}
      </div>
    </>
  );
}

export default ProjectComponent;
