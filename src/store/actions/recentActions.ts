import { firestoreDB } from "../../firebase/firebaseIndex";
import {
  UPDATE_RECENT_STORE,
  RECENT_ACTIVITY_TO_STORE,
} from "../../store/types";
import { setRecentLoadingActionMethod } from "../actions/UiActions";

//add recent task to recent store Action
export interface RecentActivityToStore {
  type: typeof RECENT_ACTIVITY_TO_STORE;
  payload: any;
}

//add recent task to recent store Action Method
export const recentActivityToStoreActionMethod = (
  activity: string,
  user: any,
  id?: string
): RecentActivityToStore => {
  const timestamp = new Date().toISOString();
  return {
    type: RECENT_ACTIVITY_TO_STORE,
    payload: [activity, user, timestamp, id],
  };
};

//add recent activity to fire  Method
export const addRecentActivityToFireMethod = (
  activity: string,
  user: string,
  id?: string //id if required to be store in firebase
) => {
  const timestamp = new Date().toISOString();
  firestoreDB.collection("Recent").doc().set({
    activity: activity,
    user: user,
    timestamp: timestamp,
    id: id,
  });
};

//update recent activity state action
export interface UpdateRecentStoreAction {
  type: typeof UPDATE_RECENT_STORE;
  payload: any;
}

//update recent activity state action method
export const updateRecentStoreActionMethod = (
  payload: any
): UpdateRecentStoreAction => {
  return {
    type: UPDATE_RECENT_STORE,
    payload: payload,
  };
};

//get recent activity Thunk Action
export const getRecentActivityFromFireThunkAction = () => {
  return (dispatch: any) => {
    const tempArray: any = [];
    firestoreDB
      .collection("Recent")
      .orderBy("timestamp", "asc")
      .get()
      .then((docs) => {
        docs.forEach((doc: any) => {
          tempArray.push([
            doc.data().activity,
            doc.data().user,
            doc.data().timestamp,
            doc.id, //doc id from firestore used for key prop for <li>
          ]);
        });
        dispatch(updateRecentStoreActionMethod(tempArray));
        dispatch(setRecentLoadingActionMethod(false));
      })
      .catch((error) => {
        console.log("error fetching recent activity from fire", error);
      });
  };
};

export type RecentActivityActions =
  | UpdateRecentStoreAction
  | RecentActivityToStore;
