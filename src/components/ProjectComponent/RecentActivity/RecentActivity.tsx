import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./RecentActivity.css";
import { getRecentActivityFromFireThunkAction } from "../../../store/actions/recentActions";
import Activities from "./Activities/Activities";

function RecentActivity() {
  const recentLoading: any = useSelector<any>(
    (state) => state.uiReducer.recentLoading
  );
  const activities: any = useSelector<any>((state) => state.recentReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecentActivityFromFireThunkAction());
  }, []);

  return (
    <div className="rec-act">
      <div className="rec-act-title">Recent Activity</div>
      {activities
        .slice(0, 5) //---------------make dynamic
        // .reverse()
        .map((activity: any) => {
          return (
            <Activities
              typeOfActivity={activity[0]}
              user={activity[1]}
              timestamp={activity[2]}
              name={activity[3]}
              key={activity[4]}
            />
          );
        })}
    </div>
  );
}

export default RecentActivity;
