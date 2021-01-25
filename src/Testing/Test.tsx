import { useSelector, useDispatch } from "react-redux";

import { Task } from "../store/types";
import { fireDataToStoreThunkActionMethod } from "../store/actions/actions";
import { FaDivide } from "react-icons/fa";

function Test() {
  const reduxStore: any = useSelector<Task>((state) => state.Reducer);
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
