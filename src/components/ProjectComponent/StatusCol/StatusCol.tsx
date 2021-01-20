import React, { useState, useEffect } from "react";
import "./StatusCol.css";
import CardCreator from "../CardCreator/CardCreator";
import CardComponent from "../CardComponent/CardComponent";
import { useFirestore } from "react-redux-firebase";
import { firestoreDB } from "../../../firebase/firebaseIndex";
function StatusCol(props: any) {
  const [firestoreData, setFirestoreData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  // const firestore = useFirestore();

  const fetchCaptions = () => {
    const final: Array<any> = [];
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // firestoreDB
    //   .collection("card")
    //   .where("status", "==", props.status)
    //   .onSnapshot((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.data());
    //     });

    //     setFirestoreData(final);
    //     setLoading(false);
    //   });
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    firestoreDB
      .collection("card")
      .where("status", "==", props.status)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          final.push([
            doc.data().caption,
            doc.data().status,
            doc.data().tag,
            doc.data().timestamp,
            doc.id,
          ]);
          setFirestoreData(final);
          setLoading(false);
        });
      });

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // firestore.collection("card").onSnapshot((querySnapshot) => {
    // firestoreDB
    //   .collection("card")
    //   .where("status", "==", props.status)
    //   .onSnapshot((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       // const date = new Date(doc.data().timestamp);
    //       final.push([
    //         doc.data().caption,
    //         doc.data().status,
    //         doc.data().tag,
    //         doc.data().timestamp,
    //         doc.id,
    //       ]);
    //     });

    //     setFirestoreData(final);
    //     setLoading(false);
    //   });
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  };

  useEffect(() => {
    fetchCaptions();
  }, []);

  return (
    <div className="statuscol-col">
      <h4>{props.status}</h4>

      <div className="card-container">
        {loading === true ? (
          <div className="loading-gif">Loading . . .</div>
        ) : (
          firestoreData.map((item: any) => {
            {
              console.log(item);
            }
            return (
              <CardComponent
                caption={item[0]}
                tag={item[2]}
                timestamp={item[3]}
                id={item[4]}
              />
            );
          })
        )}
      </div>

      <div className="add-card">
        <CardCreator />
      </div>
    </div>
  );
}

export default StatusCol;
