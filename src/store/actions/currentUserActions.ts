import { CURRENT_USER } from "../types";
import { firestoreDB } from "../../firebase/firebaseIndex";

//Current User Action
export interface CurrentUserAction {
  type: typeof CURRENT_USER;
  payload: string;
}

//Current User Action Method
export const setCurrentUserActionMethod = (
  payload: string
): CurrentUserAction => {
  return { type: CURRENT_USER, payload: payload };
};

//Get Current User Thunk Action Method
export const currentUserThunkActionMethod = () => {
  return (dispatch: any) => {
    firestoreDB.collection("CurrentUser").onSnapshot((querySnapshot) => {
      console.log(querySnapshot);
    });
  };
};

//Set Current User Thunk Action Method
export const setCurrentUserThunkActionMethod = (email: string) => {
  return (dispatch: any) => {
    firestoreDB
      .collection("CurrentUser")
      .doc("CurrentUser")
      .set({ CurrUser: email })
      .then(() => {
        console.log("Current User Added To Db");
      })
      .catch((error) => {
        console.log(error, "Error While Adding Current User To Firestore");
      });
    dispatch(setCurrentUserActionMethod(email));
  };
};
