import Reac, { useState, useEffect } from "react";
import "./StatusCol.css";
import CardCreator from "../CardCreator/CardCreator";
import CardComponent from "../CardComponent/CardComponent";
import { useFirestore } from "react-redux-firebase";

function StatusCol(props: any) {
  const [show, setShow] = useState(false);
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
          final.push([doc.data().caption, doc.data().status, doc.data().tag]);
          // console.log(final);
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
  }, []);
  return (
    <div className="statuscol-col">
      <h4>{props.status}</h4>

      <div className="card-container">
        {loading === true
          ? "loading..."
          : firestoreData.map((item: any) => {
              return item[1] === props.status ? (
                <CardComponent caption={item[0]} tag={item[2]} /> //<<<<------add tag here
              ) : null;
            })}
      </div>

      <div className="add-card" onClick={() => setShow(true)}>
        {show ? <CardCreator /> : null}+ Add Card
      </div>
    </div>
  );
}

export default StatusCol;
