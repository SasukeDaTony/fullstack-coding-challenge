import React, { useState } from "react";
import "./ComplaintTable.css";

function ComplaintTable({
  openCases,
  topComplaints,
  closedCases,
  allComplaints,
  constituentComplaints,
}) {
  // toggle between showing all complaints or constituent only complaints
  const [onlyConstituents, setOnlyConstituents] = useState(false);

  // function for State control to keep track of constituent complaints
  const filterConstituentComplaints = () => {
    setOnlyConstituents(!onlyConstituents);
  };

  return (
    <div>
      <div className="table-btn-container">
        <button
          onClick={filterConstituentComplaints}
          className="btn btn-outline-info"
          data-bs-toggle="button"
          aria-pressed="true"
        >
          {onlyConstituents
            ? "Show All Complaints"
            : "Complaints by My Constituents"}
        </button>
        <table className="table table-info table-bordered table-striped-columns table-hover">
          <thead>
            <tr className="table-warning">
              <th scope="col">From Constituent In</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Open Date</th>
              <th scope="col">Status</th>
              <th scope="col">Close Date</th>
              <th scope="col">Borough</th>
              <th scope="col">Zip Code</th>
              <th scope="col">City</th>
              <th scope="col">Community Board</th>
            </tr>
          </thead>
          <tbody >
            {(onlyConstituents ? constituentComplaints : allComplaints).map(
              (complaint) => (
                <tr key={complaint.unique_key}>
                  <td>
                    {complaint.council_dist && complaint.council_dist !== "NYCC"
                      ? complaint.council_dist
                      : "Unavailable"}
                  </td>
                  <td>
                    {complaint.complaint_type
                      ? complaint.complaint_type
                      : "Unavailable"}
                  </td>
                  <td>
                    {complaint.descriptor
                      ? complaint.descriptor
                      : "Unavailable"}
                  </td>
                  <td>{complaint.opendate}</td>
                  <td>{complaint.closedate ? "Closed" : "Open"}</td>
                  <td>
                    {complaint.closedate ? complaint.closedate : "Ongoing"}
                  </td>
                  <td>
                    {complaint.borough ? complaint.borough : "Unavailable"}
                  </td>
                  <td>{complaint.zip ? complaint.zip : "Unavailable"}</td>
                  <td>{complaint.city ? complaint.city : "Unavailable"}</td>
                  <td>
                    {complaint.community_board !== " "
                      ? complaint.community_board
                      : "Unavailable"}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplaintTable;
