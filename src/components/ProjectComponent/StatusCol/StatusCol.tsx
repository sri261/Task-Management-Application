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
          // final.push(doc.data().caption);
          // console.log(doc.data().status);
          final.push([doc.data().caption, doc.data().status]);
          console.log(final);
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
      <h3>{props.status}</h3>

      <div className="card-container">
        {loading === true
          ? "loading..."
          : firestoreData.map((item: any) => {
              // console.log(item);
              return item[1] === props.status ? (
                <CardComponent caption={item[0]} />
              ) : null;
              // return <CardComponent caption={item[0]} />;
            })}
      </div>

      <div className="add-card" onClick={() => setShow(true)}>
        {show ? <CardCreator /> : null}+ Add Card
      </div>
    </div>
  );
}

export default StatusCol;
