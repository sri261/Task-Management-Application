import React, { useState, useEffect } from "react";
import ProjectTopBarComponent from "./ProjectTopBarComponent/ProjectTopBarComponent";
import "./ProjectComponent.css";
import CardComponent from "./CardComponent/CardComponent";
import CardCreator from "../ProjectComponent/CardCreator/CardCreator";
import StatusCol from "./StatusCol/StatusCol";
import { useFirestore } from "react-redux-firebase";

function ProjectComponent() {
  // const [firestoreData, setFirestoreData] = useState<any>([]);
  // const [loading, setLoading] = useState(true);

  // const firestore = useFirestore();

  // const fetchCaptions = () => {
  //   const final: Array<any> = [];

  //   firestore
  //     .collection("card")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         final.push(doc.data().caption);
  //       });
  //       setFirestoreData(final);
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       console.log("error=", e);
  //     });
  // };

  // useEffect(() => {
  //   fetchCaptions();
  // }, []);

  return (
    <div>
      <ProjectTopBarComponent />
      <div className="status-cols">
        <StatusCol status="task-ready" />
        <StatusCol status="in-progress" />
        <StatusCol status="needs-review" />
        <StatusCol status="done" />
      </div>
    </div>

    // ===========================================
    // <div className="project-component">
    //   <ProjectTopBarComponent />
    //   <div className="card-container">
    //     {loading === true
    //       ? "loading..."
    //       : firestoreData.map((item: any) => {
    //           console.log(item);
    //           return <CardComponent caption={item} />;
    //         })}
    //   </div>
    // </div>
    // ===========================================
  );
}

export default ProjectComponent;
