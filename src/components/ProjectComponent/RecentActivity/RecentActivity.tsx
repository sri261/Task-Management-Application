import { KeyObject } from "crypto";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecentActivityFromFireThunkAction } from "../../../store/actions/recentActions";
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
    <div>
      <h3>Recent Activity</h3>
      <ul>
        {activities
          // .slice(0)
          // .reverse()
          .map((activity: any) => {
            return (
              <li key={activity[3]}>
                {activity[1]} added a new {activity[0]}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default RecentActivity;
