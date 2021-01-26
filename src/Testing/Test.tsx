import { useSelector, useDispatch } from "react-redux";

import { Task } from "../store/types";
import { fireDataToStoreThunkActionMethod } from "../store/actions/actions";
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
    </div>
  );
}

export default Test;
