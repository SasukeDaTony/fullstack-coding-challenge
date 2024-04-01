import React from "react";

import "./CouncilComplaintData.css";

const CouncilComplaintData = ({
  userProfile,
  topComplaints,
  openCases,
  closedCases,
}) => {
  const topComplaint = topComplaints.length ? topComplaints[0] : {};

  return (
    <div className="complaint-widget">
      <h3>Complaints In Your District: {userProfile.district}</h3>
      <hr />
      <h6>Top Complaint: {topComplaint.complaint_type}</h6>
      <h6>Top Complaint Count: {topComplaint.total} times</h6>
      <h6>Open Cases: {openCases.length}</h6>
      <h6>Closed Cases This Year: {closedCases.length}</h6>
    </div>
  );
};

export default CouncilComplaintData;
