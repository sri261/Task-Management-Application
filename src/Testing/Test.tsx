import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FirebaseDataState,
  Card,
  ADD_TASK_TO_STORE,
  addTestTaskToStoreActionMethod,
  addFireToStoreActionMethodThunk,
} from "../store/types";
import { getFireDataThunkTest } from "../store/actions/actions";
function Test() {
  const getFire: any = useSelector<FirebaseDataState>((state) => state.cards);
  const dispatch = useDispatch();
  const idArray = Object.keys(getFire);
  // console.log(idArray);
  // console.log(getFire[3434].caption);
  // ++++++++++++++++++++ FUNCTIONS ++++++++++++++++++++++++++++++++++
  const checkStateFn = () => {
    idArray.map((e) => {
      console.log(getFire[e]);
    });
  };

  const getDataHandler = () => {
    getFireDataThunkTest(); /* <<<<<<<<<<<<<<<<<----------Console.log() in this function */
  };

  return (
    <div>
      This is a TEST COMPONENT
      <button
        onClick={() => {
          dispatch(
            addTestTaskToStoreActionMethod(
              "store_test",
              "store_test",
              "store_test",
              "store_test"
            )
          );
        }}
      >
        Update state
      </button>
      <button
        onClick={() => {
          console.log("-------------------------------------");
          checkStateFn();
          console.log("-------------------------------------");
        }}
      >
        check state
      </button>
      <button onClick={getDataHandler}>GET FIRE DATA TEST </button>
      <button onClick={dispatch(addFireToStoreActionMethodThunk)}>
        Add Fire Data to Store
      </button>
      {/* 1 - dispatch Action Method here
           2 - Action Method will return an Action which goes to reducer
           3- reducer will check type and update the state according to action.payload*/}
    </div>
  );
}

export default Test;
