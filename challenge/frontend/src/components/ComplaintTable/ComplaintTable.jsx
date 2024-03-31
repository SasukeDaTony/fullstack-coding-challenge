import React, { useState } from "react";

function ComplaintTable({
  openCases,
  topComplaints,
  closedCases,
  allComplaints,
  constituentComplaints,
}) {
  // toggle between showing all complaints or constituent only complaints
  const [onlyConstituents, setOnlyConstituents] = useState(false);

  // State to keep track of constituent complaints
  const filterConstituentComplaints = () => {
    setOnlyConstituents(!onlyConstituents);
  };

  return (
    <div>
      <div className="">
        <button onClick={filterConstituentComplaints}>
          {onlyConstituents
            ? "Show All Complaints"
            : "Complaints by My Constituents"}
        </button>
        <table>
          <thead>
            <tr>
              <th>{"Complaint Against"}</th>
              <th>From Constituent In</th>
              <th>Type</th>
              <th>Description</th>
              <th>Open Date</th>
              <th>Status</th>
              <th>Close Date</th>
              <th>Borough</th>
              <th>Zip Code</th>
              <th>City</th>
              <th>Community Board</th>
            </tr>
          </thead>
          <tbody>
            {(onlyConstituents ? constituentComplaints : allComplaints).map(
              (complaint) => (
                <tr key={complaint.unique_key}>
                  <td>
                    {complaint.account ? complaint.account : "Unavailable"}
                  </td>
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
