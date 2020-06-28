import React from "react";
import "./Header.scss";

export interface ReclaimSpaceComponentProps {
  status: "noData" | "dataFetched";
}

const ReclaimSpaceComponent: React.FC<ReclaimSpaceComponentProps> = ({
  status,
}) => {
  const btnText = {
    noData: "Fetch Data",
    dataFetched: "Refresh Data",
  }[status];

  return (
    <div className="banner">
      <div className="caption">
        <h1>Reclaim your data</h1>
        <p>
          <span className="subtitle1">
            To Fetch your data you have to 
          </span>
          <br />
          <span className="subtitle2">
            Click on this button
          </span>
        </p>
        <div className="button-container">
          <button>{btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default ReclaimSpaceComponent;
