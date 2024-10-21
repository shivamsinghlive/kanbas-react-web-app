// // // export default function AssignmentEditor() {
// // //   return (
// // //     <div id="wd-assignments-editor">
// // //       <label htmlFor="wd-name">
// // //         <strong>Assignment Name</strong>
// // //       </label>
// // //       <br />
// // //       <br />
// // //       {/* <input id="wd-name" value="A1 - ENV + HTML" /><br /><br /> */}
// // //       <div className="input-group mb-3">
// // //         <div className="input-group-prepend"></div>
// // //         <input
// // //           type="text"
// // //           className="form-control"
// // //           aria-label="Default"
// // //           aria-describedby="inputGroup-sizing-default"
// // //           value="A1 - ENV + HTML"
// // //         />
// // //       </div>

// // //       <div className="input-group mb-3 " >
// // //         <span className="input border-0" role="textbox" contentEditable  style={{ width:"100%" ,padding:"10px"}}>
// // //           <p id="wd-description">
// // //             The assignment is <span className="text-danger">available online</span>{" "}
// // //             <br /><br />
// // //             Submit a link to the landing page of your Web application running on
// // //             Netlify.
// // //             <br />
// // //             <br />
// // //             The landing page should include the following: <br /><br />
// // //             <ul>
// // //               <li>Your full name and section</li>
// // //               <li>Your full name and section assignmments</li>
// // //               <li>Link to the Kanbas application</li>
// // //               <li>Links to all relevant source code repositories</li>
// // //             </ul><br />
// // //             The kanbas apllication should include a link to naviagate back to
// // //             the landing page.
// // //           </p>
// // //         </span>
// // //       </div>

// // //       <br />
// // //       <table>
// // //         <tr >
// // //           <td align="right" valign="top">
// // //             <label htmlFor="wd-points">Points</label>
// // //           </td>
// // //           <td >
// // //           <div className="input-group mb-3">
// // //           <div className="input-group-prepend"></div>
// // //             {/* <input id="wd-points" value={100} /> */}
// // //             <input
// // //           type="text"
// // //           id="wd-points"
// // //           className="form-control"
// // //           aria-label="Default"
// // //           aria-describedby="inputGroup-sizing-default"
// // //           value={100}

// // //         />
// // //         </div>

// // //           </td>
// // //         </tr>
// // //         <br />
// // //         <tr>
// // //           <td align="right" valign="top">
// // //             <label htmlFor="wd-group">Assignment Group</label>
// // //           </td>
// // //           <td>
// // //             <select id="wd-group">
// // //               <option value="Assignments">Assignments</option>
// // //             </select>
// // //           </td>
// // //         </tr>
// // //         <br />
// // //         <tr>
// // //           <td align="right" valign="top">
// // //             <label htmlFor="wd-display-grade-as">Display Grade as</label>
// // //           </td>
// // //           <td>
// // //             <select id="wd-display-grade-as">
// // //               <option value="Assignments">Percentage</option>
// // //             </select>
// // //           </td>
// // //         </tr>
// // //         <br />
// // //         <tr>
// // //           <td align="right" valign="top">
// // //             <label htmlFor="wd-submission-type">Submission Type </label>
// // //           </td>
// // //           <td>
// // //             <select id="wd-submission-type">
// // //               <option value="Assignments">Online</option>
// // //             </select>
// // //             <br />

// // //             <h5 id="wd-online-entry">Online Entry Options</h5>

// // //             <input type="checkbox" name="submission-type" id="wd-text-entry" />
// // //             <label htmlFor="wd-text-entry">Text</label>
// // //             <br />

// // //             <input
// // //               type="checkbox"
// // //               name="check-submission-type"
// // //               id="wd-website-url"
// // //             />
// // //             <label htmlFor="wd-website-url">Website URL</label>
// // //             <br />

// // //             <input
// // //               type="checkbox"
// // //               name="submission-type"
// // //               id="wd-media-recordings"
// // //             />
// // //             <label htmlFor="wd-media-recordings">Media_recordings</label>
// // //             <br />

// // //             <input
// // //               type="checkbox"
// // //               name="submission-type"
// // //               id="wd-student-annotation"
// // //             />
// // //             <label htmlFor="wd-student-annotation">Student Annotations</label>
// // //             <br />

// // //             <input type="checkbox" name="submission-type" id="wd-file-upload" />
// // //             <label htmlFor="wd-file-upload">File Uploads</label>
// // //           </td>
// // //         </tr>
// // //         <br />
// // //         <tr>
// // //           <td align="right" valign="top">
// // //             <label htmlFor="wd-assign-to">Assign </label>
// // //           </td>
// // //           <td>
// // //             <label htmlFor="wd-assign-to">Assign to</label>
// // //             <br />
// // //             <input id="wd-assign-to" placeholder="Everyone" />
// // //             <br />
// // //             <br />

// // //             <label htmlFor="wd-due-date"> Due </label>
// // //             <br />
// // //             <input type="date" id="wd-due-date" value="2024-05-13" />
// // //             <br />
// // //             <br />

// // //             <table>
// // //               <tr>
// // //                 <td>
// // //                   <label htmlFor="wd-available-from"> Available from </label>
// // //                   <br />
// // //                   <input
// // //                     type="date"
// // //                     id="wd-available-from"
// // //                     value="2024-05-06"
// // //                   />
// // //                 </td>
// // //                 <td>
// // //                   <label htmlFor="wd-available-until"> Until </label>
// // //                   <br />
// // //                   <input
// // //                     type="date"
// // //                     id="wd-available-until"
// // //                     value="2024-05-20"
// // //                   />
// // //                 </td>
// // //               </tr>
// // //             </table>
// // //           </td>
// // //         </tr>
// // //         <br />

// // //         {/* Complete on your own */}
// // //       </table>

// // //       <hr />
// // //       <div style={{ marginLeft: "295px", display: "flex", gap: "5px" }}>
// // //         <button>Cancel</button>
// // //         <button>Save</button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React from "react";
// // import { FaRegCalendarAlt } from "react-icons/fa";

// // export default function AssignmentEditor() {
// //   return (
// //     <div id="wd-assignments-editor">
// //       {/* Assignment Name */}
// //       <label htmlFor="wd-name">
// //         <strong>Assignment Name</strong>
// //       </label>
// //       <br />
// //       <br />
// //       <div className="input-group mb-3 ">
// //         <input
// //           type="text"
// //           className="form-control border border-secondary p-3"
// //           aria-label="Default"
// //           aria-describedby="inputGroup-sizing-default"
// //           value="A1"
// //         />
// //       </div>

// //       {/* Description Section */}
// //       {/* <div className="input-group mb-3"> */}
// //       <span
// //         className="input border-0"
// //         role="textbox"
// //         contentEditable
// //         style={{ width: "100%", padding: "10px" }}
// //       >
// //         {/* <div class="border border-secondary p-3" style="width: 300px; height: 150px;">
// //     Content inside the div
// // </div> */}
// //         <p id="wd-description" className="border border-secondary p-3">
// //           The assignment is{" "}
// //           <span className="text-danger">available online</span>.
// //           <br />
// //           <br />
// //           Submit a link to the landing page of your Web application running on
// //           Netlify.
// //           <br />
// //           <br />
// //           The landing page should include the following:
// //           <br />
// //           <br />
// //           <ul>
// //             <li>Your full name and section</li>
// //             <li>Links to each of the lab assignments</li>
// //             <li>Link to the Kanbas application</li>
// //             <li>Links to all relevant source code repositories</li>
// //           </ul>
// //           <br />
// //           The Kanbas application should include a link to navigate back to the
// //           landing page.
// //         </p>
// //       </span>

// //       <table>
// //         <tr>
// //           <td align="right" valign="top">
// //             <label htmlFor="wd-points">Points</label>
// //           </td>
// //           <td style={{ width: "100%" }}>
// //             {/* <div className="input-group mb-3" style={{ width: "100%" }}> */}
// //             <input
// //               type="text"
// //               id="wd-points"
// //               className="form-control border border-secondary p-3"
// //               aria-label="Default"
// //               aria-describedby="inputGroup-sizing-default"
// //               value={100}
// //               style={{ width: "100%" }}
// //             />
// //             {/* </div> */}
// //           </td>
// //         </tr>

// //         {/* Assignment Group */}
// //         <br />
// //         <tr>
// //           <td align="right" valign="top">
// //             <label htmlFor="wd-group">Assignment Group</label>
// //           </td>

// //           <td style={{ width: "100%" }}>
// //             {/* <div style={{ width: "100%" }} > */}
// //             <select
// //               id="wd-group"
// //               style={{ width: "100%" }}
// //               className="border border-secondary p-3"
// //             >
// //               <option value="Assignments">Assignments</option>
// //             </select>
// //           </td>
// //         </tr>

// //         {/* Display Grade as */}
// //         <br />
// //         <tr>
// //           <td align="right" valign="top">
// //             <label htmlFor="wd-display-grade-as d-flex justify-content-end">
// //               Display Grade as
// //             </label>
// //           </td>
// //           <td style={{ width: "100%" }}>
// //             {/* <div style={{ width: "100%" }} className="input-group mb-3"> */}
// //             <select
// //               id="wd-display-grade-as"
// //               style={{ width: "100%" }}
// //               className="border border-secondary p-3"
// //             >
// //               <option value="Percentage">Percentage</option>
// //             </select>
// //             {/* </div> */}
// //           </td>
// //         </tr>

// //         {/* Submission Type */}
// //         <br />
// //         <tr>
// //           <td align="right" valign="top">
// //             <label htmlFor="wd-submission-type">Submission Type</label>
// //           </td>
// //           <td style={{ width: "100%" }}>
// //             <div className=" border border-secondary p-3">
// //               <select id="wd-submission-type" className="form-control border border-secondary p-3" style={{ width: "100%" }}>
// //                 <option value="Online" className="dropdown-item">
// //                   Online
// //                 </option>
// //               </select>

// //               <br />
// //               <h5 id="wd-online-entry">Online Entry Options</h5>
// //               <br />
// //               <input
// //                 type="checkbox"
// //                 name="submission-type"
// //                 id="wd-website-url"
// //                 className="form-check-input"
// //                 checked
// //               />
// //               <label htmlFor="wd-website-url"> Website URL</label>
// //               <br />
// //               <br />
// //               <input
// //                 type="checkbox"
// //                 className="form-check-input"
// //                 name="submission-type"
// //                 id="wd-text-entry"
// //               />
// //               <label htmlFor="wd-text-entry">Text Entry</label>
// //               <br />
// //               <br />
// //               <input
// //                 type="checkbox"
// //                 name="submission-type"
// //                 id="wd-media-recordings"
// //                 className="form-check-input"
// //               />
// //               <label htmlFor="wd-media-recordings">Media Recordings</label>
// //               <br />
// //               <br />
// //               <input
// //                 type="checkbox"
// //                 className="form-check-input"
// //                 name="submission-type"
// //                 id="wd-file-upload"
// //               />
// //               <label htmlFor="wd-file-upload">File Uploads</label>
// //             </div>
// //           </td>
// //         </tr>

// //         {/* Assign Section */}
// //         <br />
// //         <tr>
// //           <td align="right" valign="top">
// //             <label htmlFor="wd-assign-to">Assign</label>
// //           </td>
// //           <td>
// //             <div className="border border-secondary p-3">
// //               <label htmlFor="wd-assign-to">Assign to</label>
// //               <br />
// //               <input id="wd-assign-to" value="Everyone" readOnly />
// //               <br />
// //               <br />
// //               <label htmlFor="wd-due-date">Due</label>
// //               <br />
// //               <input type="date" id="wd-due-date" value="2024-05-13" /><FaRegCalendarAlt />

// //               <br />
// //               <br />

// //               <table>
// //                 <tr>
// //                   <td>
// //                     <label htmlFor="wd-available-from">Available from</label>
// //                     <br />
// //                     <input
// //                       type="date"
// //                       id="wd-available-from"
// //                       value="2024-05-06"
// //                     />
// //                     <FaRegCalendarAlt />

// //                   </td>
// //                   <td>
// //                     <label htmlFor="wd-available-until">Until</label>
// //                     <br />
// //                     <input
// //                       type="date"
// //                       id="wd-available-until"
// //                       value="2024-05-20"
// //                     />
// //                     <FaRegCalendarAlt />

// //                   </td>
// //                 </tr>
// //               </table>
// //             </div>
// //           </td>
// //         </tr>
// //         <br />
// //       </table>

// //       {/* Cancel and Save Buttons */}
// //       <hr />
// //       <div
// //         className="d-flex justify-content-lg-end justify-content-end"
// //         style={{ marginLeft: "295px", display: "flex", gap: "5px" }}
// //       >
// //         <button className="btn btn-light">Cancel</button>
// //         <button className="btn btn-danger">Save</button>
// //       </div>
// //     </div>
// //   );
// // }

// // import { relative } from "path";
// // import { RiArrowDropDownFill } from "react-icons/ri";
// // export default function AssignmentEditor() {
// //     return (
// //       <div id="wd-assignments-editor" style={{marginLeft:"2%", marginRight:"2%"}}>
// //         <label htmlFor="wd-name" >Assignment Name</label>
// //         <br />
// //         <input id="wd-name" value="A1" className="form-control mb-2"/><br />
// //         <textarea id="wd-description" rows={10} cols={50} className="form-control mb-2">
// //           The assignment is available online Submit a link to the landing page of
// //         </textarea>

// //         <br />
// //         <br />

// //         <div >
// //         <div className="d-flex">
// //             <div className="w-50 pe-5">
// //                 <label htmlFor="wd-points" className="float-end" style={{marginTop:"5px"}}>Points</label>
// //             </div>
// //             <div className="w-50 pe-3">
// //                 <input id="wd-points" value={100} className="form-control mb-2"/>
// //             </div>
// //         </div>
// //         <br />

// //         <div className="d-flex">
// //             <div className="w-50 pe-5">
// //             <label htmlFor="wd-group" className="float-end" style={{marginTop:"5px"}}>Assignment Group</label>
// //             </div>
// //             <div className="w-50 pe-3" style={{position:"relative"}}>
// //                 <select name="assignment-group" id="wd-group" className="form-control mb-2">
// //                     <option value="" disabled selected>ASSIGNMENTS</option>
// //                     <option value="VAL1">Option 1</option>
// //                     <option value="VAL1">Option 2</option>
// //                 </select>
// //                 <RiArrowDropDownFill className="fs-1" style={{position:"absolute", top:"1%", right:"3%", pointerEvents:"none"}}/>
// //             </div>
// //         </div>
// //         <br />

// //         <div className="d-flex">
// //             <div className="w-50 pe-5">
// //             <label htmlFor="wd-display-grade-as" className="float-end" style={{marginTop:"5px"}}>Display Grade as</label>
// //             </div>
// //             <div className="w-50 pe-3" style={{position:"relative"}}>
// //                 <select name="display-grade" id="wd-display-grade-as" className="form-control mb-2">
// //                     <option value="VAL1">Percentage</option>
// //                     <option value="VAL1">Option 2</option>
// //                 </select>
// //                 <RiArrowDropDownFill className="fs-1" style={{position:"absolute", top:"1%", right:"3%", pointerEvents:"none"}}/>
// //             </div>
// //         </div>
// //         <br />

// //         <div className="d-flex ps-3 pe-3" >
// //             <div className="w-50 pe-5">
// //             <label htmlFor="wd-submission-type" className="float-end" style={{marginTop:"5px"}}>Submission Type</label>
// //             </div>
// //             <div className="w-50 border p-3">
// //                 <div style={{position:"relative"}}>
// //                 <select name="submission-type" id="wd-submission-type" className="form-control mb-2">
// //                     <option value="VAL1">Online</option>
// //                     <option value="VAL1">Option 2</option>
// //                 </select>
// //                 <RiArrowDropDownFill className="fs-1" style={{position:"absolute", top:"1%", right:"1%", pointerEvents:"none"}}/>
// //                 </div>

// //                 <br />

// //                 <div>
// //                 <label htmlFor="wd-entry-checkbox-type" ><strong>Online Entry Options</strong></label>
// //                 <br />
// //                 <br />
// //                 <input type="checkbox" name="check-entry" id="wd-text-entry" className="form-check-input"/>
// //                 <label htmlFor="wd-text-entry" className="form-check-label ps-3 mb-2">Text Entry</label><br />

// //                 <input type="checkbox" name="check-entry" id="wd-website-url" className="form-check-input"/>
// //                 <label htmlFor="wd-website-url" className="form-check-label ps-3 mb-2">Website URL</label><br/>

// //                 <input type="checkbox" name="check-entry" id="wd-media-recording" className="form-check-input"/>
// //                 <label htmlFor="wd-media-recording" className="form-check-label ps-3 mb-2">Media Recordings</label><br/>

// //                 <input type="checkbox" name="check-entry" id="wd-student-annotation" className="form-check-input"/>
// //                 <label htmlFor="wd-student-annotation" className="form-check-label ps-3 mb-2">Student Annotations</label><br />

// //                 <input type="checkbox" name="check-entry" id="wd-file-upload" className="form-check-input"/>
// //                 <label htmlFor="wd-file-upload" className="form-check-label ps-3">File Uploads</label><br />
// //                 </div>
// //             </div>
// //         </div>
// //         <br />

// //         <div className="d-flex ps-3 pe-3" >
// //             <div className="w-50 pe-5">
// //             <label htmlFor="wd-assign-to" className="float-end" style={{marginTop:"5px"}}> Assign</label>
// //             </div>
// //             <div className="w-50 border p-3">
// //                 <div>
// //                     <label htmlFor="wd-assign-to" className="mb-2"><strong>Assign to</strong></label>
// //                     <input type="text" id="wd-assign-to" value={"Everyone"} className="form-control mb-2"/>
// //                 </div>

// //                 <br />

// //                 <div>
// //                     <label htmlFor="wd-due-date" className="mb-2"><strong>Due</strong></label>
// //                     <input type="date" id="wd-due-date" name="due-date" value="2024-05-13" className="form-control mb-2"/>
// //                 </div>

// //                 <br />

// //                 <div className="row">
// //                     <div className="col-md-6 mb-2">
// //                         <label htmlFor="wd-available-from" className="mb-2"><strong>Available From</strong></label>
// //                         <input type="date" id="wd-available-from" name="available-from" value="2024-05-06" className="form-control mb-2"/>
// //                     </div>

// //                     <div className="col-md-6 mb-2">
// //                         <label htmlFor="wd-due-date" className="mb-2"><strong>Until</strong></label>
// //                         <input type="date" id="wd-available-until" name="available-until" value="2024-05-24" className="form-control mb-2"/>
// //                     </div>
// //                 </div>

// //             </div>
// //         </div>
// //         <br />

// //         </div>

// //         <hr />

// //         <div className="pe-3">
// //             <button id="wd-assignment-save" className="btn btn-danger float-end">Save</button>
// //             <button id="wd-assignment-cancel" className="btn btn-secondary float-end me-2">Cancel</button>
// //         </div>

// //         </div>

//         // <table>
//         //   <tr>
//         //     <td align="right" valign="top" >
//         //       <label htmlFor="wd-points">Points</label>
//         //     </td>
//         //     <td>
//         //       <input id="wd-points" value={100} className="form-control mb-2"/>
//         //     </td>
//         //   </tr>

//         //   <br />

//         //   <tr>
//         //     <td align="right" valign="top">
//         //       <label htmlFor="wd-group" >Assignment Group</label>
//         //     </td>
//         //     <td>
//         //       <select name="assignment-group" id="wd-group" className="form-control mb-2">
//         //         <option value="" disabled selected>ASSIGNMENTS</option>
//         //         <option value="VAL1">Option 1</option>
//         //         <option value="VAL1">Option 2</option>
//         //       </select>
//         //     </td>
//         //   </tr>

//         //   <br />

//         //   <tr>
//         //     <td align="right" valign="top">
//         //         <label htmlFor="wd-display-grade-as">Display Grade as</label>
//         //         </td>
//         //         <td>
//         //         <select name="display-grade" id="wd-display-grade-as" className="form-control mb-2">
//         //             <option value="VAL1">Percentage</option>
//         //             <option value="VAL1">Option 2</option>
//         //         </select>
//         //     </td>
//         //   </tr>

//         //   <br />

//         //   <tr>
//         //     <td align="right" valign="top">
//         //         <label htmlFor="wd-submission-type">Submission Type</label>
//         //     </td>
//         //     <td>
//         //         <select name="submission-type" id="wd-submission-type" className="form-control mb-2">
//         //             <option value="VAL1">Online</option>
//         //             <option value="VAL1">Option 2</option>
//         //         </select>
//         //     </td>
//         //   </tr>

//         //   <br />

//         //   <tr>
//         //     <td></td>
//         //     <td>
//         //         <label htmlFor="wd-entry-checkbox-type" >Online Entry Options</label>
//         //         <br />
//         //         <input type="checkbox" name="check-entry" id="wd-text-entry" />
//         //         <label htmlFor="wd-text-entry">Text Entry</label><br/>

//         //         <input type="checkbox" name="check-entry" id="wd-website-url"/>
//         //         <label htmlFor="wd-website-url">Website URL</label><br/>

//         //         <input type="checkbox" name="check-entry" id="wd-media-recording"/>
//         //         <label htmlFor="wd-media-recording">Media Recordings</label><br/>

//         //         <input type="checkbox" name="check-entry" id="wd-student-annotation"/>
//         //         <label htmlFor="wd-student-annotation">Student Annotations</label><br />

//         //         <input type="checkbox" name="check-entry" id="wd-file-upload"/>
//         //         <label htmlFor="wd-file-upload">File Uploads</label>
//         //     </td>
//         //   </tr>

//         //   <br />

//         //   <tr>
//         //     <td align="right" valign="top">
//         //         <label htmlFor="wd-assign-to"> Assign</label>
//         //     </td>
//         //     <td>
//         //         <label htmlFor="wd-assign-to">Assign to</label><br />
//         //         <input type="text" id="wd-assign-to" value={"Everyone"} className="form-control mb-2"/>
//         //     </td>
//         //   </tr>

//         //   <tr>
//         //     <td></td>
//         //     <td>
//         //         <label htmlFor="wd-due-date">Due</label><br />
//         //         <input type="date" id="wd-due-date" name="due-date" value="2024-05-13" className="form-control mb-2"/>
//         //     </td>
//         //   </tr>

//         //   <tr>
//         //     <td></td>
//         //     <td>
//         //         <label htmlFor="wd-available-from">Available From</label><br />
//         //         <input type="date" id="wd-available-from" name="available-from" value="2024-05-06" className="form-control mb-2"/>
//         //     </td>
//         //     <td>
//         //         <label htmlFor="wd-due-date">Until</label><br />
//         //         <input type="date" id="wd-available-until" name="available-until" value="2024-05-24" className="form-control mb-2"/>
//         //     </td>
//         //   </tr>

//         //   {/* Complete on your own */}
//         // </table>
//         // <hr />
//         // <table width="100%">
//         //     <tr>
//         //         <td align="right">
//         //             <button id="wd-assignment-cancel" className="btn btn-secondary">Cancel</button>
//         //             <button id="wd-assignment-save" className="btn btn-danger">Save</button>
//         //         </td>
//         //     </tr>
//         // </table>

//   // );}

// import React from "react";
// import { FaRegCalendarAlt } from "react-icons/fa";

// export default function AssignmentEditor() {
//   return (
//     <div id="wd-assignments-editor" className="p-4">
//       {/* Assignment Name */}
//       <div className="mb-3">
//         <label htmlFor="wd-name" className="form-label">
//           <strong>Assignment Name</strong>
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="wd-name"
//           value="A1"
//         />
//       </div>

//       {/* Description Section */}
//       <div className="mb-3">
//         <p id="wd-description" className="border p-3">
//           The assignment is <span className="text-danger">available online</span>.
//           <br />
//           <br />
//           <span>
//           Submit a link to the landing page of your Web application running on

//           <a href="#" className="text-primary">Netlify</a>.</span>
//           <br />
//           <br />
//           The landing page should include the following:
//           <ul>
//             <li>Your full name and section</li>
//             <li>Links to each of the lab assignments</li>
//             <li>Link to the <a href="#" className="text-primary">Kanbas</a> application</li>
//             <li>Links to all relevant source code repositories</li>
//           </ul>
//           The Kanbas application should include a link to navigate back to the
//           landing page.
//         </p>
//       </div>

//       {/* Points and Other Details */}
//       <div className="mb-3">
//         <div className="row mb-3 align-items-center">
//           <div className="col-3 d-flex justify-content-end ">
//             <label htmlFor="wd-points" className="form-label">Points</label>
//           </div>
//           <div className="col-9">
//             <input
//               type="text"
//               id="wd-points"
//               className="form-control"
//               value={100}
//             />
//           </div>
//         </div>

//         <div className="row mb-3 align-items-center">
//           <div className="col-3 d-flex justify-content-end">
//             <label htmlFor="wd-group" className="form-label">Assignment Group</label>
//           </div>
//           <div className="col-9">
//             <select id="wd-group" className="form-control">
//               <option value="Assignments">ASSIGNMENTS</option>
//             </select>
//           </div>
//         </div>

//         <div className="row mb-3 align-items-center">
//           <div className="col-3 d-flex justify-content-end">
//             <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
//           </div>
//           <div className="col-9">
//             <select id="wd-display-grade-as" className="form-control">
//               <option value="Percentage">Percentage</option>
//             </select>
//           </div>
//         </div>

//         <div className="row mb-3 align-items-center">
//           <div className="col-3 d-flex justify-content-end">
//             <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
//           </div>
//           <div className="col-9">
//             <select id="wd-submission-type" className="form-control">
//               <option value="Online">Online</option>
//             </select>
//             <div className="mt-3">
//               <h5>Online Entry Options</h5>
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="wd-text-entry" />
//                 <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="wd-website-url" checked />
//                 <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
//                 <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
//                 <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="wd-file-upload" />
//                 <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Assignment Section */}
//         <div className="row mb-3">
//           <div className="col-3 d-flex justify-content-end">
//             <label htmlFor="wd-assign-to" className="form-label">Assign</label>
//           </div>
//           <div className="col-9">
//             <div className="border p-3">
//               <div className="mb-3">
//                 <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
//                 <input id="wd-assign-to" className="form-control" value="Everyone" readOnly />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="wd-due-date" className="form-label">Due</label>
//                 <div className="input-group">
//                   <input type="text" id="wd-due-date" className="form-control" value="May 13, 2024, 11:59 PM" readOnly />
//                   <span className="input-group-text"><FaRegCalendarAlt /></span>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col">
//                   <label htmlFor="wd-available-from" className="form-label">Available from</label>
//                   <div className="input-group">
//                     <input type="text" id="wd-available-from" className="form-control" value="May 6, 2024, 12:00 AM" readOnly />
//                     <span className="input-group-text"><FaRegCalendarAlt /></span>
//                   </div>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="wd-available-until" className="form-label">Until</label>
//                   <div className="input-group">
//                     <input type="text" id="wd-available-until" className="form-control" value="May 20, 2024, 12:00 AM" readOnly />
//                     <span className="input-group-text"><FaRegCalendarAlt /></span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cancel and Save Buttons */}
//       <div className="d-flex justify-content-end mt-3">
//         <button className="btn btn-light me-2">Cancel</button>
//         <button className="btn btn-danger">Save</button>
//       </div>
//     </div>
//   );
// }

import { relative } from "path";
import { RiArrowDropDownFill } from "react-icons/ri";
import * as db from "../../Database";
import { useLocation, useParams } from "react-router";
export default function AssignmentEditor() {
  const assignments = db.assignments;
  // const courses=db.
  const { cid, aid } = useParams();
  const { pathname } = useLocation();
  console.log("from assignment editor " + cid + pathname);
  const assignPath =
    "/" +
    pathname.split("/")[0] +
    "/" +
    pathname.split("/")[1] +
    pathname.split("/")[2] +
    "/" +
    pathname.split("/")[3];
  return (
    <div
      id="wd-assignments-editor"
      style={{ marginLeft: "2%", marginRight: "2%" }}
    >
      <label htmlFor="wd-name">Assignment Name </label>
      <br />
      <input id="wd-name" value={aid} className="form-control mb-2" />
      <br />
      {/* <textarea
        id="wd-description"
        rows={10}
        cols={50}
        className="form-control mb-2"
      > */}
      {/* The assignment is available online Submit a link to the landing page of */}
      <div className="mb-3 custom-border-div">
        <p id="wd-description">
          The assignment {aid} is
          <span className="text-danger"> available online</span> <br />
          <br />
          <span>
            Submit a link to the landing page of your Web application running on{" "}
          </span>
          <a
            href="https://effervescent-salamander-21e823.netlify.app/#/Labs/Lab3"
            style={{
              textDecorationStyle: "dotted",
              textDecorationColor: "red",
            }}
          >
            Netlify
          </a>
          .
          <br />
          <br />
          The landing page should include the following: <br />
          <br />
          <ul>
            <li>Your full name and section</li>
            <li>Your full name and section assignmments</li>
            <li>
              Link to the{" "}
              <a
                href="https://effervescent-salamander-21e823.netlify.app/#/Kanbas/Account/Signin"
                style={{
                  textDecorationStyle: "dotted",
                  textDecorationColor: "red",
                }}
              >
                Kanbas
              </a>{" "}
              application
            </li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <br />
          The{" "}
          <a
            href="https://effervescent-salamander-21e823.netlify.app/#/Kanbas/Account/Signin"
            style={{
              textDecorationStyle: "dotted",
              textDecorationColor: "red",
            }}
          >
            kanbas
          </a>{" "}
          apllication should include a link to naviagate back to the landing
          page.
        </p>
      </div>

      {/* </textarea> */}

      <br />
      <br />

      <div>
        <div className="d-flex">
          <div className="w-50 pe-5">
            <label
              htmlFor="wd-points"
              className="float-end"
              style={{ marginTop: "5px" }}
            >
              Points
            </label>
          </div>
          <div className="w-50 pe-3">
            <input id="wd-points" value={100} className="form-control mb-2" />
          </div>
        </div>
        <br />

        <div className="d-flex">
          <div className="w-50 pe-5">
            <label
              htmlFor="wd-group"
              className="float-end"
              style={{ marginTop: "5px" }}
            >
              Assignment Group
            </label>
          </div>
          <div className="w-50 pe-3" style={{ position: "relative" }}>
            <select
              name="assignment-group"
              id="wd-group"
              className="form-control mb-2"
            >
              <option value="" disabled selected>
                ASSIGNMENTS
              </option>
              <option value="VAL1">Option 1</option>
              <option value="VAL1">Option 2</option>
            </select>
            <RiArrowDropDownFill
              className="fs-1"
              style={{
                position: "absolute",
                top: "1%",
                right: "3%",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
        <br />

        <div className="d-flex">
          <div className="w-50 pe-5">
            <label
              htmlFor="wd-display-grade-as"
              className="float-end"
              style={{ marginTop: "5px" }}
            >
              Display Grade as
            </label>
          </div>
          <div className="w-50 pe-3" style={{ position: "relative" }}>
            <select
              name="display-grade"
              id="wd-display-grade-as"
              className="form-control mb-2"
            >
              <option value="VAL1">Percentage</option>
              <option value="VAL1">Option 2</option>
            </select>
            <RiArrowDropDownFill
              className="fs-1"
              style={{
                position: "absolute",
                top: "1%",
                right: "3%",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
        <br />

        <div className="d-flex ps-3 pe-3">
          <div className="w-50 pe-5">
            <label
              htmlFor="wd-submission-type"
              className="float-end"
              style={{ marginTop: "5px" }}
            >
              Submission Type
            </label>
          </div>
          <div className="w-50 border p-3">
            <div style={{ position: "relative" }}>
              <select
                name="submission-type"
                id="wd-submission-type"
                className="form-control mb-2"
              >
                <option value="VAL1">Online</option>
                <option value="VAL1">Option 2</option>
              </select>
              <RiArrowDropDownFill
                className="fs-1"
                style={{
                  position: "absolute",
                  top: "1%",
                  right: "1%",
                  pointerEvents: "none",
                }}
              />
            </div>

            <br />

            <div>
              <label htmlFor="wd-entry-checkbox-type">
                <strong>Online Entry Options</strong>
              </label>
              <br />
              <br />
              <input
                type="checkbox"
                name="check-entry"
                id="wd-text-entry"
                className="form-check-input"
              />
              <label
                htmlFor="wd-text-entry"
                className="form-check-label ps-3 mb-2"
              >
                Text Entry
              </label>
              <br />

              <input
                type="checkbox"
                name="check-entry"
                id="wd-website-url"
                className="form-check-input"
              />
              <label
                htmlFor="wd-website-url"
                className="form-check-label ps-3 mb-2"
              >
                Website URL
              </label>
              <br />

              <input
                type="checkbox"
                name="check-entry"
                id="wd-media-recording"
                className="form-check-input"
              />
              <label
                htmlFor="wd-media-recording"
                className="form-check-label ps-3 mb-2"
              >
                Media Recordings
              </label>
              <br />

              <input
                type="checkbox"
                name="check-entry"
                id="wd-student-annotation"
                className="form-check-input"
              />
              <label
                htmlFor="wd-student-annotation"
                className="form-check-label ps-3 mb-2"
              >
                Student Annotations
              </label>
              <br />

              <input
                type="checkbox"
                name="check-entry"
                id="wd-file-upload"
                className="form-check-input"
              />
              <label htmlFor="wd-file-upload" className="form-check-label ps-3">
                File Uploads
              </label>
              <br />
            </div>
          </div>
        </div>
        <br />

        <div className="d-flex ps-3 pe-3">
          <div className="w-50 pe-5">
            <label
              htmlFor="wd-assign-to"
              className="float-end"
              style={{ marginTop: "5px" }}
            >
              {" "}
              Assign
            </label>
          </div>
          <div className="w-50 border p-3">
            <div>
              <label htmlFor="wd-assign-to" className="mb-2">
                <strong>Assign to</strong>
              </label>
              <input
                type="text"
                id="wd-assign-to"
                value={"Everyone"}
                className="form-control mb-2"
              />
            </div>

            <br />

            <div>
              <label htmlFor="wd-due-date" className="mb-2">
                <strong>Due</strong>
              </label>
              <input
                type="date"
                id="wd-due-date"
                name="due-date"
                value="2024-05-13"
                className="form-control mb-2"
              />
            </div>

            <br />

            <div className="row">
              <div className="col-md-6 mb-2">
                <label htmlFor="wd-available-from" className="mb-2">
                  <strong>Available From</strong>
                </label>
                <input
                  type="date"
                  id="wd-available-from"
                  name="available-from"
                  value="2024-05-06"
                  className="form-control mb-2"
                />
              </div>

              <div className="col-md-6 mb-2">
                <label htmlFor="wd-due-date" className="mb-2">
                  <strong>Until</strong>
                </label>
                <input
                  type="date"
                  id="wd-available-until"
                  name="available-until"
                  value="2024-05-24"
                  className="form-control mb-2"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>

      <hr />

      <div className="pe-3">
        <a href={`#/Kanbas/Courses/${cid}/Assignments`}>
          <button id="wd-assignment-save" className="btn btn-danger float-end">
            {/* <a href={`/Kanbas/Courses/${cid}/Assignments`}>Save</a> */}
            Save
          </button>
        </a>
        <a href={`#/Kanbas/Courses/${cid}/Assignments`}>
          <button
            id="wd-assignment-cancel"
            className="btn btn-secondary float-end me-2"
          >
            Cancel
          </button>
        </a>
      </div>
    </div>

    // <table>
    //   <tr>
    //     <td align="right" valign="top" >
    //       <label htmlFor="wd-points">Points</label>
    //     </td>
    //     <td>
    //       <input id="wd-points" value={100} className="form-control mb-2"/>
    //     </td>
    //   </tr>

    //   <br />

    //   <tr>
    //     <td align="right" valign="top">
    //       <label htmlFor="wd-group" >Assignment Group</label>
    //     </td>
    //     <td>
    //       <select name="assignment-group" id="wd-group" className="form-control mb-2">
    //         <option value="" disabled selected>ASSIGNMENTS</option>
    //         <option value="VAL1">Option 1</option>
    //         <option value="VAL1">Option 2</option>
    //       </select>
    //     </td>
    //   </tr>

    //   <br />

    //   <tr>
    //     <td align="right" valign="top">
    //         <label htmlFor="wd-display-grade-as">Display Grade as</label>
    //         </td>
    //         <td>
    //         <select name="display-grade" id="wd-display-grade-as" className="form-control mb-2">
    //             <option value="VAL1">Percentage</option>
    //             <option value="VAL1">Option 2</option>
    //         </select>
    //     </td>
    //   </tr>

    //   <br />

    //   <tr>
    //     <td align="right" valign="top">
    //         <label htmlFor="wd-submission-type">Submission Type</label>
    //     </td>
    //     <td>
    //         <select name="submission-type" id="wd-submission-type" className="form-control mb-2">
    //             <option value="VAL1">Online</option>
    //             <option value="VAL1">Option 2</option>
    //         </select>
    //     </td>
    //   </tr>

    //   <br />

    //   <tr>
    //     <td></td>
    //     <td>
    //         <label htmlFor="wd-entry-checkbox-type" >Online Entry Options</label>
    //         <br />
    //         <input type="checkbox" name="check-entry" id="wd-text-entry" />
    //         <label htmlFor="wd-text-entry">Text Entry</label><br/>

    //         <input type="checkbox" name="check-entry" id="wd-website-url"/>
    //         <label htmlFor="wd-website-url">Website URL</label><br/>

    //         <input type="checkbox" name="check-entry" id="wd-media-recording"/>
    //         <label htmlFor="wd-media-recording">Media Recordings</label><br/>

    //         <input type="checkbox" name="check-entry" id="wd-student-annotation"/>
    //         <label htmlFor="wd-student-annotation">Student Annotations</label><br />

    //         <input type="checkbox" name="check-entry" id="wd-file-upload"/>
    //         <label htmlFor="wd-file-upload">File Uploads</label>
    //     </td>
    //   </tr>

    //   <br />

    //   <tr>
    //     <td align="right" valign="top">
    //         <label htmlFor="wd-assign-to"> Assign</label>
    //     </td>
    //     <td>
    //         <label htmlFor="wd-assign-to">Assign to</label><br />
    //         <input type="text" id="wd-assign-to" value={"Everyone"} className="form-control mb-2"/>
    //     </td>
    //   </tr>

    //   <tr>
    //     <td></td>
    //     <td>
    //         <label htmlFor="wd-due-date">Due</label><br />
    //         <input type="date" id="wd-due-date" name="due-date" value="2024-05-13" className="form-control mb-2"/>
    //     </td>
    //   </tr>

    //   <tr>
    //     <td></td>
    //     <td>
    //         <label htmlFor="wd-available-from">Available From</label><br />
    //         <input type="date" id="wd-available-from" name="available-from" value="2024-05-06" className="form-control mb-2"/>
    //     </td>
    //     <td>
    //         <label htmlFor="wd-due-date">Until</label><br />
    //         <input type="date" id="wd-available-until" name="available-until" value="2024-05-24" className="form-control mb-2"/>
    //     </td>
    //   </tr>

    //   {/* Complete on your own */}
    // </table>
    // <hr />
    // <table width="100%">
    //     <tr>
    //         <td align="right">
    //             <button id="wd-assignment-cancel" className="btn btn-secondary">Cancel</button>
    //             <button id="wd-assignment-save" className="btn btn-danger">Save</button>
    //         </td>
    //     </tr>
    // </table>
  );
}
