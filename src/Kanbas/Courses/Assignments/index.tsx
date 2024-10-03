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

 
import "../../styles.css";

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
          <span className="fw-bold"> <h5> ASSIGNMENTS</h5></span>
          <div className="ms-auto d-flex align-items-center">
            <span className="badge bg-secondary custom-border-pill me-2 rounded-pill"> <h6> 40% of Total </h6></span>
            <FaPlus className="me-2" />
            <IoEllipsisVertical />
          </div>
        </div>
        <ul className="list-group list-group-flush">
          {[
            {
              title: "A1",
              availability: "May 6 at 12:00 am",
              due: "May 13 at 11:59 pm",
            },
            {
              title: "A2",
              availability: "May 13 at 12:00 am",
              due: "May 20 at 11:59 pm",
            },
            {
              title: "A3",
              availability: "May 20 at 12:00 am",
              due: "May 27 at 11:59 pm",
            },
          ].map((assignment, index) => (
            <li key={index} className="list-group-item d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3" />
              <PiNotePencilFill className=" text-success me-2 position-absolute fs-5"/>
              <div className="flex-grow-1">
                <a href="#/Kanbas/Courses/1234/Assignments/123" className="fw-bold">
                  {assignment.title}
                </a>
                <div style={{marginTop:"0px"}}>
                <LessonControlButtons/>
                </div>
                
                <div>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> {assignment.availability} | <br />
                  <b>Due</b> {assignment.due} | 100 pts
                </div>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
//   );
// }
