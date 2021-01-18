import React, { useState, useEffect } from "react";
import "./StatusCol.css";
import CardCreator from "../CardCreator/CardCreator";
import CardComponent from "../CardComponent/CardComponent";
import { useFirestore } from "react-redux-firebase";
import { firestoreDB } from "../../../firebase/firebaseIndex";
function StatusCol(props: any) {
  const [firestoreData, setFirestoreData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const firestore = useFirestore();

  const fetchCaptions = () => {
    const final: Array<any> = [];

    // firestore.collection("card").onSnapshot((querySnapshot) => {
    firestoreDB.collection("card").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        final.push([
          doc.data().caption,
          doc.data().status,
          doc.data().tag,
          doc.data().timestamp,
          doc.id,
        ]);
      });

      setFirestoreData(final);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchCaptions();
  }, []);

  return (
    <div className="statuscol-col">
      <h4>{props.status}</h4>

      <div className="card-container">
        {loading === true ? (
          <div className="loading-gif">
            Loading . . .{/* <img src={loadingGif} alt="loading " /> */}
          </div>
        ) : (
          firestoreData.map((item: any) => {
            // console.log(item[4]);
            return item[1] === props.status ? (
              <CardComponent
                caption={item[0]}
                tag={item[2]}
                timestamp={item[3]}
                id={item[4]}
              />
            ) : null;
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
