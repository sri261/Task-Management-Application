import ProjectTopBarComponent from "./ProjectTopBarComponent/ProjectTopBarComponent";
import "./ProjectComponent.css";
import StatusCol from "./StatusCol/StatusCol";
import Navbar from "./Navbar/Navbar";

function ProjectComponent() {
  return (
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
  );
}

export default ProjectComponent;
