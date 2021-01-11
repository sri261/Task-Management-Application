import React from "react";

function TestComp() {
  return <div>test</div>;
}

export default TestComp;

test;

// import React from "react";
// import { firestoreDB } from "../firebase/firebaseIndex";
// import firebase from "firebase";
// function TestComp() {
//   console.log(firestoreDB, "firestoreDB");

//   firestoreDB
//     .collection("card")
//     .add({
//       firstName: "tom",
//       lastName: "Hanks",
//       emailID: "sample@gmail.com",
//     })
//     .then((docRef) => {
//       console.log(docRef, "docRef");
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   firestoreDB
//     .collection("card")
//     .doc("ID1")
//     .set({
//       firstName: "Tom",
//       lastName: "Hanks",
//       emailID: "willsmith@gmail.com",
//     })
//     .then(() => {
//       console.log("added to firestoreDB");
//     })
//     .catch((error) => {
//       console.log("Error adding to firestoreDB", error);
//     });

//   firestoreDB
//     .collection("card")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} ${doc.data()}`);
//       });
//     });

//   return (
//     <div>
//       <h1>Test Component</h1>
//     </div>
//   );
// }

// export default TestComp;

// export const addTofirestoreDb = () => {
//   firestoreDB
//     .collection("card")
//     .doc("ID")
//     .set({
//       caption: "new caprion",
//     })
//     .then(() => {
//       console.log("added to firestoreDB");
//     })
//     .catch((error) => {
//       console.log("Error adding to firestoreDB", error);
//     });
// };
