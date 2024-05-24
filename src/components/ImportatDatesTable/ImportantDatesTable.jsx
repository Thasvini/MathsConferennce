import React from "react";
import "./ImportantDatesTable.css";

const ImportantDatesTable = () => {
  return (
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
            <td>Last Date for Submission</td>
            <td >25 October 2024</td>
          </tr>
          <tr>
            <td>Acceptance Notification</td>
            <td >06 December 2024</td>
          </tr>
          <tr>
            <td>Registration Open</td>
            <td >09 December 2024 </td>
        </tr>
          <tr>
            <td>Registration Deadline</td>
            <td >06 January 2025</td>
          </tr>
          <tr>
            <td>Conference Schedule Release</td>
            <td>10 January 2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ImportantDatesTable;
