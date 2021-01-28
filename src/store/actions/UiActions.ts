import {
  UPDATE_TAG_FROM_FIRE,
  Tag,
  ADD_TAG_TO_STORE,
  TAGS_LOADING,
  SET_RECENT_LOADING,
} from "../types";
import { firestoreDB } from "../../firebase/firebaseIndex";
// =======================================================

//update tag color action
export interface TagStateUpdateAction {
  type: typeof UPDATE_TAG_FROM_FIRE;
  payload: Tag;
}
//update tag color action method
export const tagStateUpdateActionMethod = (tag: Tag): TagStateUpdateAction => {
  return {
    type: UPDATE_TAG_FROM_FIRE,
    payload: tag,
  };
};

//get Tags from firestore
export const getTagsFromFirestoreThunkAction = () => {
  return (dispatch: any) => {
    let tags: any = {};
    firestoreDB
      .collection("Tags")
      .get()
      .then((doc) => {
        doc.forEach((doc) => {
          const data = doc.data();
          tags[doc.id] = data;
        });
        dispatch(tagStateUpdateActionMethod(tags));
        dispatch(tagLoadingActionMethod(false));
      });
  };
};
// =======================================================
//add tag to store Action
export interface AddTagToStore {
  type: typeof ADD_TAG_TO_STORE;
  payload: any;
}
//add tag to store Action Method
export const addTagToStore = (tag: any): AddTagToStore => {
  return {
    type: ADD_TAG_TO_STORE,
    payload: tag,
  };
};
// =======================================================
//tag loading action
export interface TagLoadingAction {
  type: typeof TAGS_LOADING;
  payload: boolean;
}
//tag loading action
export const tagLoadingActionMethod = (input: boolean): TagLoadingAction => {
  return { type: TAGS_LOADING, payload: input };
};
// =======================================================
//recent loading Action
export interface SetRecentLoading {
  type: typeof SET_RECENT_LOADING;
  payload: boolean;
}
//recent loading Action Method
export const setRecentLoadingActionMethod = (
  payload: boolean
): SetRecentLoading => {
  return {
    type: SET_RECENT_LOADING,
    payload: payload,
  };
};
// =======================================================
