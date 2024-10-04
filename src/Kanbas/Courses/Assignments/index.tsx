import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { PiNotePencilFill } from "react-icons/pi";
import { FaCaretDown, FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import "./styles.css";

// export default function Assignments() {
//   return (
// <div id="wd-assignments ">
//   <div className="d-flex justify-content-between align-items-center mb-3">
//     <div className="input-group" style={{ width: "70%" }}>
//       {/* <span className="input-group-text bg-white border-end-0">
//         <FaSearch />
//       </span> */}
//       <input
//         type="text"
//         className="form-control border-start-0"
//         placeholder=" 🔍 Search..."
//         style={{ width: "75%" }}
//       />
//     </div>
//     <div>
//       <button className="btn btn-secondary me-2">
//         <FaPlus className="me-1" />
//         Group
//       </button>
//       <button className="btn btn-danger">
//         <FaPlus className="me-1" />
//         Assignment
//       </button>
//     </div>
//   </div>

//   <ul id="wd-modules" className="list-group rounded-0 ">
//     <li className="wd-module list-group-item p-0 mb-5 fs-5  ">
//       <div className="wd-title p-3 ps-2 bg-secondary">
//         {/* <h3 id="wd-assignments-title"> */}{" "}
//         <BsGripVertical className="me-2 fs-3" />
//         <FaCaretDown className="me-2 fs-3" />
//         ASSIGNMENTS
//         <span className="d-flex justify-content-lg-end">
//           {/* <div className="border border-1 radius-2 rounded-pill border-black ">

//             <p >40% of Total </p>
//             </div> */}
//           <span className="card-header d-flex justify-content-between align-items-center bg-gray">
//             <span>40% of Total</span>
//           </span>
//           <FaPlus
//             className="position-relative me-2"
//             style={{ bottom: "1px" }}
//           />{" "}
//           <IoEllipsisVertical className="fs-4" />
//         </span>
//       </div>
//       <ul
//         id="wd-assignment-list"
//         className="wd-lessons list-group rounded-0"
//       >
//         <li className="wd-assignment-list-item list-group-item p-3 ps-1 custom-border">
//           <BsGripVertical className="me-2 fs-3" />
//           <PiNotePencilFill className="me-2 fs-3 " />
//           <span>
//             <a
//               className="wd-assignment-link "
//               href="#/Kanbas/Courses/1234/Assignments/123"
//             >
//               A1 - ENV + HTML
//             </a>
//           </span>

//           <LessonControlButtons />
//           <div>
//             <span className="text-danger">Multiple Modules </span> |{" "}
//             <b>Not available unitl</b> May 6 at 12:00 am | <br /> <b>Due</b>{" "}
//             May 13 at 11:59 pm | 100 pts
//           </div>
//         </li>
//         <li className="wd-assignment-list-item list-group-item p-3 ps-1 custom-border">
//           <BsGripVertical className="me-2 fs-3" />
//           <PiNotePencilFill className="me-2 fs-3 " />
//           <a
//             className="wd-assignment-link"
//             href="#/Kanbas/Courses/1234/Assignments/123"
//           >
//             A2 - CSS + BOOTSTRAP
//           </a>
//           <LessonControlButtons />
//           <br />
//           <span className="text-danger">Multiple Modules </span> |{" "}
//           <b>Not available unitl</b> May 13 at 12:00 am | <br />
//           <b>Due</b> May 20 at 11:59 pm | 100 pts
//         </li>

//         <li className="wd-assignment-list-item list-group-item p-3 ps-1 custom-border">
//           <BsGripVertical className="me-2 fs-3" />
//           <PiNotePencilFill className="me-2 fs-3 " />
//           <a
//             className="wd-assignment-link"
//             href="#/Kanbas/Courses/1234/Assignments/123"
//           >
//             A3 - JAVASCRIPT + REACT
//           </a>
//           <LessonControlButtons />
//           <br />
//           <span className="text-danger">Multiple Modules </span> |{" "}
//           <b>Not available unitl</b> May 20 at 12:00 am | <br />
//           <b>Due</b> May 27 at 11:59 pm | 100 pts
//         </li>
//       </ul>
//     </li>
//   </ul>
// </div>

// import "../../styles.css";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: "70%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search..."
          />
        </div>
        <div>
          <button className="btn btn-secondary me-2">
            <FaPlus className="me-1" />
            Group
          </button>
          <button className="btn btn-danger">
            <FaPlus className="me-1" />
            Assignment
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-header d-flex align-items-center  p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          <FaCaretDown className="me-2 fs-3" />
          <span className="fw-bold">
            {" "}
            <h5> ASSIGNMENTS</h5>
          </span>
          <div className="ms-auto d-flex align-items-center">
            <span className=" bg-secondary custom-border-pill me-2 rounded-pill">
              {" "}
              <h6> 40% of Total </h6>
            </span>
            <FaPlus className="me-2" />
            <IoEllipsisVertical />
          </div>
        </div>
        <ul id="wd-assignments" className="list-group rounded-0 module-container">
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-light">
                  <BsGripVertical className="me-2 fs-3" />
                  <GoTriangleDown className="me-2 fs-4"/>
                    ASSIGNMENTS
                  <AssignmentControlButtons/>
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson d-flex border-bottom border-gray">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="ms-2 fs-4" />
                  <FaRegEdit className="ms-3 text-success fs-4"/>
                </div>
                <div className="fs-6 assignment-padding">
                  <a className="wd-assignment-link text-decoration-none text-dark ms-3"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                  <strong>A1</strong><br/>
                  </a>
                  <div className="ms-3 text-muted">
                  <span className="text-danger">Multiple Modules </span>| <span className="text-dark">Not available until</span> May 6 at 12:00am |<br/><span className="text-dark">Due</span> May 13 at 11:59pm | 100pts
                  </div>
                </div>
                <div className="ms-auto d-flex align-items-center">
                <span className="me-4"> 
                  <GreenCheckmark />
                </span>
                  <IoEllipsisVertical className="me-4"/>
                </div>
              </li>
              <li className="wd-lesson d-flex border-bottom border-gray">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="ms-2 fs-4" />
                  <FaRegEdit className="ms-3 text-success fs-4"/>
                </div>
                <div className="fs-6 assignment-padding">
                  <a className="wd-assignment-link text-decoration-none text-dark ms-3"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                  <strong>A2</strong><br/>
                  </a>
                  <div className="ms-3 text-muted">
                  <span className="text-danger">Multiple Modules </span>| <span className="text-dark">Not available until</span> May 13 at 12:00am |<br/><span className="text-dark">Due</span> May 20 at 11:59pm | 100pts
                  </div>
                </div>
                <div className="ms-auto d-flex align-items-center">
                <span className="me-4"> 
                  <GreenCheckmark />
                </span>
                  <IoEllipsisVertical className="me-4"/>
                </div>
              </li>  
              <li className="wd-lesson d-flex border-bottom border-gray">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="ms-2 fs-4" />
                  <FaRegEdit className="ms-3 text-success fs-4"/>
                </div>
                <div className="fs-6 assignment-padding">
                  <a className="wd-assignment-link text-decoration-none text-dark ms-3"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                  <strong>A3</strong><br/>
                  </a>
                  <div className="ms-3 text-muted">
                  <span className="text-danger">Multiple Modules </span>| <span className="text-dark">Not available until</span> May 20 at 12:00am |<br/><span className="text-dark">Due</span> May 27 at 11:59pm | 100pts
                  </div>
                </div>
                <div className="ms-auto d-flex align-items-center">
                <span className="me-4"> 
                  <GreenCheckmark />
                </span>
                  <IoEllipsisVertical className="me-4"/>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

// import { BsGripVertical } from "react-icons/bs";
// import LessonControlButtons from "../Modules/LessonControlButtons";
// import { PiNotePencilFill } from "react-icons/pi";
// import { FaCaretDown, FaPlus } from "react-icons/fa6";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { FaSearch } from "react-icons/fa";
// import "../../styles.css";

// export default function Assignments() {
//   return (
//     <div id="wd-assignments ">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <div className="input-group" style={{ width: "70%" }}>
//           {/* <span className="input-group-text bg-white border-end-0">
//             <FaSearch />
//           </span> */}
//           <input
//             type="text"
//             className="form-control border-start-0"
//             placeholder=" 🔍 Search..."
//             style={{ width: "75%" }}
//           />
//         </div>
//         <div>
//           <button className="btn btn-secondary me-2">
//             <FaPlus className="me-1" />
//             Group
//           </button>
//           <button className="btn btn-danger">
//             <FaPlus className="me-1" />
//             Assignment
//           </button>
//         </div>
//       </div>

//       <ul id="wd-modules" className="list-group rounded-0 ">
//         <li className="wd-module list-group-item p-0 mb-5 fs-5  ">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             {/* <h3 id="wd-assignments-title"> */}{" "}
//             <BsGripVertical className="me-2 fs-3" />
//             <FaCaretDown className="me-2 fs-3" />
//             ASSIGNMENTS
//             <span className="d-flex justify-content-lg-end">
//               {/* <div className="border border-1 radius-2 rounded-pill border-black ">

//                 <p >40% of Total </p>
//                 </div> */}
//               <span className="card-header d-flex justify-content-between align-items-center bg-gray">
//                 <span>40% of Total</span>
//               </span>
//               <FaPlus
//                 className="position-relative me-2"
//                 style={{ bottom: "1px" }}
//               />{" "}
//               <IoEllipsisVertical className="fs-4" />
//             </span>
//           </div>
//           <ul
//             id="wd-assignment-list"
//             className="wd-lessons list-group rounded-0"
//           >
//             <li className="wd-assignment-list-item list-group-item p-3 ps-1 custom-border">
//               <BsGripVertical className="me-2 fs-3" />
//               <PiNotePencilFill className="me-2 fs-3 " />
//               <span>
//                 <a
//                   className="wd-assignment-link "
//                   href="#/Kanbas/Courses/1234/Assignments/123"
//                 >
//                   A1 - ENV + HTML
//                 </a>
//               </span>

//               <LessonControlButtons />
//               <div>
//                 <span className="text-danger">Multiple Modules </span> |{" "}
//                 <b>Not available unitl</b> May 6 at 12:00 am | <br /> <b>Due</b>{" "}
//                 May 13 at 11:59 pm | 100 pts
//               </div>
//             </li>
//             <li className="wd-assignment-list-item list-group-item p-3 ps-1 custom-border">
//               <BsGripVertical className="me-2 fs-3" />
//               <PiNotePencilFill className="me-2 fs-3 " />
//               <a
//                 className="wd-assignment-link"
//                 href="#/Kanbas/Courses/1234/Assignments/123"
//               >
//                 A2 - CSS + BOOTSTRAP
//               </a>
//               <LessonControlButtons />
//               <br />
//               <span className="text-danger">Multiple Modules </span> |{" "}
//               <b>Not available unitl</b> May 13 at 12:00 am | <br />
//               <b>Due</b> May 20 at 11:59 pm | 100 pts
//             </li>

//             <li className="wd-assignment-list-item list-group-item p-3 ps-1 custom-border">
//               <BsGripVertical className="me-2 fs-3" />
//               <PiNotePencilFill className="me-2 fs-3 " />
//               <a
//                 className="wd-assignment-link"
//                 href="#/Kanbas/Courses/1234/Assignments/123"
//               >
//                 A3 - JAVASCRIPT + REACT
//               </a>
//               <LessonControlButtons />
//               <br />
//               <span className="text-danger">Multiple Modules </span> |{" "}
//               <b>Not available unitl</b> May 20 at 12:00 am | <br />
//               <b>Due</b> May 27 at 11:59 pm | 100 pts
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }


// import { IoEllipsisVertical } from "react-icons/io5";
// // import AssignmentControls from "./AssignmentControls";
// import { BsGripVertical } from "react-icons/bs";
// // import AssignmentControlButtons from "./AssignmentControlButtons";
// import { RiArrowDropDownFill } from "react-icons/ri";
// import AssignmentControls from "./AssignmentControls";
// import AssignmentControlButtons from "./AssignmentControlButtons";
// export default function Assignments() {
//     return (
//       <div id="wd-assignments" style={{marginLeft:"20px", marginRight:"20px"}}>
//         <AssignmentControls/><br /><br /><br />
//         <ul id="wd-assignment-title" className="list-group rounded-0">
//             <li className="wd-assignment-title list-group-item p-0 mb-5 fs-5 border-gray">
//             <div className="wd-assignment-title p-3 ps-2 bg-secondary">
//                 <BsGripVertical className="me-1 fs-3"/>
//                 <RiArrowDropDownFill className="me-2 fs-1" type="button"/>
//                 ASSIGNMENTS
//                 <IoEllipsisVertical className="float-end fs-3"/>
//                 <button className="float-end" style={{ border: "none", background: "none", outline: "none" }}>+</button>
//                 <span className="float-end" style={{marginRight:"20px"}}><button style={{ borderRadius: "10px"}}>40% of Total</button></span>
//             </div>
//             <ul className="wd-assignment-list list-group rounded-0">
//                 <li className="wd-assignment-list-item list-group-item p-3 ps-1 wd-lesson">
//                     <AssignmentControlButtons/>
//                     <div style={{marginLeft:"75px"}}>
//                         <a className="wd-assignment-link text-black"
//                             href="#/Kanbas/Courses/1234/Assignments/123"
//                             style={{textDecoration:"none"}}>
//                             <strong>A1</strong>
//                         </a>
//                         <br/>
//                         <span><a className="wd-modules-list-link text-danger"
//                             href="https://www.google.com" style={{textDecoration:"none"}}>Multiple Modules</a> | <strong>Not available until</strong> May 6 at 12:00 am | </span>
//                         <br />
//                         <span>
//                             <strong>Due</strong> May 13 at 11:59 pm | 100 pts
//                         </span>
//                     </div>
//                 </li>
//             </ul>

//             <ul className="wd-assignment-list list-group rounded-0">
//                 <li className="wd-assignment-list-item list-group-item p-3 ps-1 wd-lesson">
//                     <AssignmentControlButtons/>
//                     <div style={{marginLeft:"75px"}}>
//                         <a className="wd-assignment-link text-black"
//                             href="#/Kanbas/Courses/1234/Assignments/123"
//                             style={{textDecoration:"none"}}>
//                             <strong>A2</strong>
//                         </a>
//                         <br/>
//                         <span><a className="wd-modules-list-link text-danger"
//                             href="https://www.google.com" style={{textDecoration:"none"}}>Multiple Modules</a> | <strong>Not available until</strong> May 13 at 12:00 am | </span>
//                         <br />
//                         <span>
//                             <strong>Due</strong> May 20 at 11:59 pm | 100 pts
//                         </span>
//                     </div>
//                 </li>
//             </ul>

//             <ul className="wd-assignment-list list-group rounded-0">
//                 <li className="wd-assignment-link list-group-item p-3 ps-1 wd-lesson">
//                     <AssignmentControlButtons/>
//                     <div style={{marginLeft:"75px"}}>
//                         <a className="wd-assignment-link text-black"
//                             href="#/Kanbas/Courses/1234/Assignments/123"
//                             style={{textDecoration:"none"}}>
//                             <strong>A3</strong>
//                         </a>
//                         <br/>
//                         <span><a className="wd-modules-list-link text-danger"
//                             href="https://www.google.com" style={{textDecoration:"none"}}>Multiple Modules</a> | <strong>Not available until</strong> May 20 at 12:00 am | </span>
//                         <br />
//                         <span>
//                             <strong>Due</strong> May 27 at 11:59 pm | 100 pts
//                         </span>
//                     </div>
//                 </li>
//             </ul>

//             </li>
//         </ul>
//       </div>
//   );}




//
