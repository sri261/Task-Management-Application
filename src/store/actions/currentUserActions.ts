import { CURRENT_USER } from "../types";
import { firestoreDB } from "../../firebase/firebaseIndex";

//Current User Action
export interface CurrentUserAction {
  type: typeof CURRENT_USER;
  payload: string;
  // payload: boolean;
}

//Current User Action Method
export const setCurrentUserActionMethod = (
  payload: string
  // payload: boolean
): CurrentUserAction => {
  return { type: CURRENT_USER, payload: payload };
};

//Get Current User Thunk Action Method
export const currentUserThunkActionMethod = () => {
  return (dispatch: any) => {
    // firestoreDB.collection("CurrentUser").onSnapshot((querySnapshot) => {
    //   querySnapshot.forEach((item: any) => {
    //     console.log(item);
    //   });
    // });
    // dispatch(setCurrentUserActionMethod())
  };
};

//Set Current User Thunk Action Method
export const setCurrentUserThunkActionMethod = (email: string) => {
  return (dispatch: any) => {
    firestoreDB
      .collection("CurrentUser")
      .doc("CurrentUser")
      .set({ email })
      .then(() => {
        console.log("Current User Added To Db");
      })
      .catch((error) => {
        console.log(error, "Error While Adding Current User To Firestore");
      });
    dispatch(setCurrentUserActionMethod(email));
  };
};
