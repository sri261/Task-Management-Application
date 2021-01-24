import { useSelector, useDispatch } from "react-redux";

import { Task } from "../store/types";
import { fireDataToStoreThunkActionMethod } from "../store/actions/actions";
import { FaDivide } from "react-icons/fa";

function Test() {
  const reduxStore: any = useSelector<Task>((state) => state.tasks);
  const dispatch = useDispatch();
  const temp = () => {
    console.log(reduxStore);
    const keys = Object.keys(reduxStore);
    keys.map((key) => {
      console.log(key);
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          console.log("Dispatch button Clicked");
          dispatch(fireDataToStoreThunkActionMethod());
        }}
      >
        Dispatch
      </button>
      <button
        onClick={() => {
          temp();
        }}
      >
        Check Store
      </button>
    </div>
  );
}

export default Test;
