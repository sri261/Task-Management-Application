import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import { auth } from "../firebase/firebaseIndex";
import { Task } from "../store/types";
import { fireDataToStoreThunkActionMethod } from "../store/actions/actions";
import { addTagToStore } from "../store/actions/UiActions";
function Test() {
  const reduxStore: any = useSelector<any>((state) => state);
  const dispatch = useDispatch();
  const uiRed: any = useSelector<any>((state) => state.uiReducer.tags);
  const name = auth().currentUser?.displayName;

  return (
    <div>
      <button
        onClick={() => {
          console.log(reduxStore, "Store");
        }}
      >
        Check Store
      </button>
      <button
        onClick={() => {
          console.log(name);
        }}
      >
        test
      </button>
    </div>
  );
}

export default Test;
