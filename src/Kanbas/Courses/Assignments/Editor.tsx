// export default function AssignmentEditor() {
//   return (
//     <div id="wd-assignments-editor">
//       <label htmlFor="wd-name">
//         <strong>Assignment Name</strong>
//       </label>
//       <br />
//       <br />
//       {/* <input id="wd-name" value="A1 - ENV + HTML" /><br /><br /> */}
//       <div className="input-group mb-3">
//         <div className="input-group-prepend"></div>
//         <input
//           type="text"
//           className="form-control"
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//           value="A1 - ENV + HTML"
//         />
//       </div>

//       <div className="input-group mb-3 " >
//         <span className="input border-0" role="textbox" contentEditable  style={{ width:"100%" ,padding:"10px"}}>
//           <p id="wd-description">
//             The assignment is <span className="text-danger">available online</span>{" "}
//             <br /><br />
//             Submit a link to the landing page of your Web application running on
//             Netlify.
//             <br />
//             <br />
//             The landing page should include the following: <br /><br />
//             <ul>
//               <li>Your full name and section</li>
//               <li>Your full name and section assignmments</li>
//               <li>Link to the Kanbas application</li>
//               <li>Links to all relevant source code repositories</li>
//             </ul><br />
//             The kanbas apllication should include a link to naviagate back to
//             the landing page.
//           </p>
//         </span>
//       </div>

//       <br />
//       <table>
//         <tr >
//           <td align="right" valign="top">
//             <label htmlFor="wd-points">Points</label>
//           </td>
//           <td >
//           <div className="input-group mb-3">
//           <div className="input-group-prepend"></div>
//             {/* <input id="wd-points" value={100} /> */}
//             <input
//           type="text"
//           id="wd-points"
//           className="form-control"
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//           value={100}

//         />
//         </div>

//           </td>
//         </tr>
//         <br />
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-group">Assignment Group</label>
//           </td>
//           <td>
//             <select id="wd-group">
//               <option value="Assignments">Assignments</option>
//             </select>
//           </td>
//         </tr>
//         <br />
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-display-grade-as">Display Grade as</label>
//           </td>
//           <td>
//             <select id="wd-display-grade-as">
//               <option value="Assignments">Percentage</option>
//             </select>
//           </td>
//         </tr>
//         <br />
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-submission-type">Submission Type </label>
//           </td>
//           <td>
//             <select id="wd-submission-type">
//               <option value="Assignments">Online</option>
//             </select>
//             <br />

//             <h5 id="wd-online-entry">Online Entry Options</h5>

//             <input type="checkbox" name="submission-type" id="wd-text-entry" />
//             <label htmlFor="wd-text-entry">Text</label>
//             <br />

//             <input
//               type="checkbox"
//               name="check-submission-type"
//               id="wd-website-url"
//             />
//             <label htmlFor="wd-website-url">Website URL</label>
//             <br />

//             <input
//               type="checkbox"
//               name="submission-type"
//               id="wd-media-recordings"
//             />
//             <label htmlFor="wd-media-recordings">Media_recordings</label>
//             <br />

//             <input
//               type="checkbox"
//               name="submission-type"
//               id="wd-student-annotation"
//             />
//             <label htmlFor="wd-student-annotation">Student Annotations</label>
//             <br />

//             <input type="checkbox" name="submission-type" id="wd-file-upload" />
//             <label htmlFor="wd-file-upload">File Uploads</label>
//           </td>
//         </tr>
//         <br />
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-assign-to">Assign </label>
//           </td>
//           <td>
//             <label htmlFor="wd-assign-to">Assign to</label>
//             <br />
//             <input id="wd-assign-to" placeholder="Everyone" />
//             <br />
//             <br />

//             <label htmlFor="wd-due-date"> Due </label>
//             <br />
//             <input type="date" id="wd-due-date" value="2024-05-13" />
//             <br />
//             <br />

//             <table>
//               <tr>
//                 <td>
//                   <label htmlFor="wd-available-from"> Available from </label>
//                   <br />
//                   <input
//                     type="date"
//                     id="wd-available-from"
//                     value="2024-05-06"
//                   />
//                 </td>
//                 <td>
//                   <label htmlFor="wd-available-until"> Until </label>
//                   <br />
//                   <input
//                     type="date"
//                     id="wd-available-until"
//                     value="2024-05-20"
//                   />
//                 </td>
//               </tr>
//             </table>
//           </td>
//         </tr>
//         <br />

//         {/* Complete on your own */}
//       </table>

//       <hr />
//       <div style={{ marginLeft: "295px", display: "flex", gap: "5px" }}>
//         <button>Cancel</button>
//         <button>Save</button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name */}
      <label htmlFor="wd-name">
        <strong>Assignment Name</strong>
      </label>
      <br />
      <br />
      <div className="input-group mb-3 ">
        <input
          type="text"
          className="form-control border border-secondary p-3"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value="A1"
        />
      </div>

      {/* Description Section */}
      {/* <div className="input-group mb-3"> */}
      <span
        className="input border-0"
        role="textbox"
        contentEditable
        style={{ width: "100%", padding: "10px" }}
      >
        {/* <div class="border border-secondary p-3" style="width: 300px; height: 150px;">
    Content inside the div
</div> */}
        <p id="wd-description" className="border border-secondary p-3">
          The assignment is{" "}
          <span className="text-danger">available online</span>.
          <br />
          <br />
          Submit a link to the landing page of your Web application running on
          Netlify.
          <br />
          <br />
          The landing page should include the following:
          <br />
          <br />
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <br />
          The Kanbas application should include a link to navigate back to the
          landing page.
        </p>
      </span>

      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td style={{ width: "100%" }}>
            {/* <div className="input-group mb-3" style={{ width: "100%" }}> */}
            <input
              type="text"
              id="wd-points"
              className="form-control border border-secondary p-3"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={100}
              style={{ width: "100%" }}
            />
            {/* </div> */}
          </td>
        </tr>

        {/* Assignment Group */}
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>

          <td style={{ width: "100%" }}>
            {/* <div style={{ width: "100%" }} > */}
            <select
              id="wd-group"
              style={{ width: "100%" }}
              className="border border-secondary p-3"
            >
              <option value="Assignments">Assignments</option>
            </select>
          </td>
        </tr>

        {/* Display Grade as */}
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as d-flex justify-content-end">
              Display Grade as
            </label>
          </td>
          <td style={{ width: "100%" }}>
            {/* <div style={{ width: "100%" }} className="input-group mb-3"> */}
            <select
              id="wd-display-grade-as"
              style={{ width: "100%" }}
              className="border border-secondary p-3"
            >
              <option value="Percentage">Percentage</option>
            </select>
            {/* </div> */}
          </td>
        </tr>

        {/* Submission Type */}
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td style={{ width: "100%" }}>
            <div className=" border border-secondary p-3">
              <select id="wd-submission-type" className="form-control border border-secondary p-3" style={{ width: "100%" }}>
                <option value="Online" className="dropdown-item">
                  Online
                </option>
              </select>
              
              <br />
              <h5 id="wd-online-entry">Online Entry Options</h5>
              <br />
              <input
                type="checkbox"
                name="submission-type"
                id="wd-website-url"
                className="form-check-input"
                checked
              />
              <label htmlFor="wd-website-url"> Website URL</label>
              <br />
              <br />
              <input
                type="checkbox"
                className="form-check-input"
                name="submission-type"
                id="wd-text-entry"
              />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <br />
              <input
                type="checkbox"
                name="submission-type"
                id="wd-media-recordings"
                className="form-check-input"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <br />
              <input
                type="checkbox"
                className="form-check-input"
                name="submission-type"
                id="wd-file-upload"
              />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </td>
        </tr>

        {/* Assign Section */}
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <div className="border border-secondary p-3">
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input id="wd-assign-to" value="Everyone" readOnly />
              <br />
              <br />
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input type="date" id="wd-due-date" value="2024-05-13" />
              <br />
              <br />

              <table>
                <tr>
                  <td>
                    <label htmlFor="wd-available-from">Available from</label>
                    <br />
                    <input
                      type="date"
                      id="wd-available-from"
                      value="2024-05-06"
                    />
                    s
                  </td>
                  <td>
                    <label htmlFor="wd-available-until">Until</label>
                    <br />
                    <input
                      type="date"
                      id="wd-available-until"
                      value="2024-05-20"
                    />
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <br />
      </table>

      {/* Cancel and Save Buttons */}
      <hr />
      <div
        className="d-flex justify-content-lg-end justify-content-end"
        style={{ marginLeft: "295px", display: "flex", gap: "5px" }}
      >
        <button className="btn btn-light">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
