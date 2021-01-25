import { useSelector, useDispatch } from "react-redux";

import { Task } from "../store/types";
import { fireDataToStoreThunkActionMethod } from "../store/actions/actions";
import { setCurrentUserActionMethod } from "../store/actions/currentUserActions";
function Test() {
  const reduxStore: any = useSelector<any>((state) => state);
  const dispatch = useDispatch();

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
          dispatch(setCurrentUserActionMethod("hello"));

          console.log("success");
        }}
      >
        Email
      </button>
    </div>
  );
}

export default Test;
