import React from "react";
import "./ImportantDatesTable.css";
import poster from "../../assets/poster.png";

const ImportantDatesTable = () => {
  return (
    <div className="important-dates-container">
      <div className="important-dates-table">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paper Submissions Open On</td>
              <td>12 July 2024</td>
            </tr>
            <tr>
              <td><span>Last Date for Submission</span></td>
              <td><span>25 October 2024</span></td>
            </tr>
            <tr>
              <td>Acceptance Notification</td>
              <td>06 December 2024</td>
            </tr>
            <tr class="glow">
              <td><span>Registration Open</span></td>
              <td><span>09 December 2024</span></td>
            </tr>
            <tr>
              <td>Registration Deadline</td>
              <td>06 January 2025</td>
            </tr>
            <tr>
              <td><span>Conference Schedule Release</span></td>
              <td><span>10 January 2025</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ImportantDatesTable;
