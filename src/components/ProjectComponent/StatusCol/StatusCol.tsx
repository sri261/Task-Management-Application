import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";

import "./StatusCol.css";
import CardCreator from "../CardCreator/CardCreator";
import CardComponent from "../CardComponent/CardComponent";
import { Task } from "../../../store/types";

function StatusCol(props: any) {
  const [firestoreData, setFirestoreData] = useState<any>([]);

  const storeData: any = useSelector<Task>((state) => state.Reducer);
  const storeReady: any = useSelector<any>(
    (state) => state.uiReducer.fireDataLoaded
  );
  const temp: any = useSelector<any>((state) => state.Reducer);
  const final: Array<any> = [];
  const fetchStoreData = () => {
    const entries: any = Object.entries(storeData);
    entries.map((i: any) => {
      if (i[1].status === props.status) {
        final.push([
          i[0],
          i[1].caption,
          i[1].status,
          i[1].tag,
          i[1].timestamp,
          i[1].commentCount,
          i[1].pins,
        ]);
      }
    });
  };

  useEffect(() => {
    if (storeReady) {
      fetchStoreData();
      setFirestoreData(final);
    }
  }, [storeReady, storeData]);

  return (
    <div className="statuscol-col">
      <h4>{props.status}</h4>
      <div className="card-container">
        {storeReady ? (
          <div>
            {firestoreData
              .slice(0)
              .reverse()
              .map((item: any) => {
                return (
                  <CardComponent
                    key={item[0]}
                    id={item[0]}
                    caption={item[1]}
                    status={item[2]}
                    tag={item[3]}
                    timestamp={item[4]}
                    commentCount={item[5]}
                    pins={item[6]}
                  />
                );
              })}
          </div>
        ) : (
          <div className="loader">
            <PropagateLoader color={"#f40ba6"} size={10} />
            {/* Loading...   */}
          </div>
        )}
      </div>

      <div className="add-card">
        <CardCreator />
      </div>
    </div>
  );
}

export default StatusCol;
