import { useSelector, useDispatch } from "react-redux";

import { Task } from "../store/types";
import { fireDataToStoreThunkActionMethod } from "../store/actions/actions";
import { addTagToStore } from "../store/actions/UiActions";
function Test() {
  const reduxStore: any = useSelector<any>((state) => state);
  const dispatch = useDispatch();
  const uiRed: any = useSelector<any>((state) => state.uiReducer.tags);

  return (
    <div>
      <button
        onClick={() => {
          console.log(reduxStore, "Store");
        }}
      >
        Check Store
      </button>
    </div>
  );
}

export default Test;
