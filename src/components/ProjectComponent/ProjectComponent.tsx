import React, { useState, useEffect } from "react";
import ProjectTopBarComponent from "./ProjectTopBarComponent/ProjectTopBarComponent";
import "./ProjectComponent.css";
import CardComponent from "./CardComponent/CardComponent";
import { useFirestore } from "react-redux-firebase";

function ProjectComponent() {
  const [firestoreData, setFirestoreData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const firestore = useFirestore();

  const fetchCaptions = () => {
    const final: Array<any> = [];

    //   firestore.collection("card").onSnapshot((e) => {
    //     console.log(e.docs);
    //   });

    firestore
      .collection("card")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          final.push(doc.data().caption);
        });
        setFirestoreData(final);
        setLoading(false);
      })
      .catch((e) => {
        console.log("error=", e);
      });
  };

  useEffect(() => {
    fetchCaptions();

    console.log("firestoreData=>", firestoreData);
  }, []);

  return (
    <div className="project-component">
      <ProjectTopBarComponent />
      {loading === true
        ? "loading..."
        : firestoreData.map((item: any) => {
            // return item
            return <CardComponent />;
          })}
      {/* <CardComponent /> */}
    </div>
  );
}

export default ProjectComponent;
