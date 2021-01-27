import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProjectTopBarComponent from "./ProjectTopBarComponent/ProjectTopBarComponent";
import "./ProjectComponent.css";
import StatusCol from "./StatusCol/StatusCol";
import Navbar from "./Navbar/Navbar";
import CommentsModal from "../Modal/CommentsModal/CommentsModal";
import { UIState } from "../../store/types";
import { fireDataToStoreThunkActionMethod } from "../../store/actions/actions";
import { getTagsFromFirestoreThunkAction } from "../../store/actions/UiActions";

function ProjectComponent() {
  const uiState = useSelector<any>((state) => state.uiReducer.show);
  const dispatch = useDispatch();
  dispatch(fireDataToStoreThunkActionMethod());
  dispatch(getTagsFromFirestoreThunkAction());

  return (
    <>
      <div style={uiState ? { filter: "blur(2px)" } : {}}>
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
        {uiState ? <CommentsModal /> : null}
      </div>
    </>
  );
}

export default ProjectComponent;
