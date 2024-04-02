import React from "react";
import "./ComplaintWidget.css";
import { complaintIcons } from "../../utils/utils";

const ComplaintWidget = ({ topComplaints, openCases, closedCases }) => {
  const topComplaint = topComplaints.length ? topComplaints[0] : {};

  return (
    <div className="complaint-widget">
      <h3>
        <span className="red">Complaints </span>
      </h3>
      <hr />
      <h6>
        {" "}
        <span className="red">Top Complaint</span>:{" "}
        {topComplaint.complaint_type}
        <img className="top-complaint-icon"
          src={complaintIcons[topComplaint.complaint_type]}
          alt={topComplaint.complaint_type}
        />
      </h6>
      <h6>
        Complaint Was Made: <span className="red">{topComplaint.total}X </span>
        times
      </h6>
      <h6>
        Current Open Cases:{" "}
        {openCases.length <= 5 ? (
          <span className="green">{openCases.length} </span>
        ) : openCases.length >= 5 ? (
          <span className="yellow"> {openCases.length} </span>
        ) : (
          <span className="red">{openCases.length}</span>
        )}
      </h6>
      <h6>
        Closed Cases This Year:{" "}
        <span className="green">{closedCases.length}</span>
      </h6>
    </div>
  );
};

export default ComplaintWidget;
