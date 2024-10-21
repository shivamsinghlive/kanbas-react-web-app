import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { PiNotePencilFill } from "react-icons/pi";
import { FaCaretDown, FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database";
import { json } from "stream/consumers";

export default function Assignments() {
  const assignments = db.assignments;
  const { cid } = useParams();
  console.log("from editor line 14", cid);
  assignments.filter((assign)=> 
  {
    if(assign.course===cid)
    {
      console.log("assignment " + JSON.stringify(assign));
    }

  }

    )
  return (
    <div id="wd-assignments ">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: "70%" }}>
          {/* <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span> */}
          <input
            type="text"
            className="form-control border-start-0"
            placeholder=" 🔍 Search..."
            style={{ width: "75%" }}
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

      <ul id="wd-modules" className="list-group rounded-0 ">
        <li className="wd-module list-group-item p-0 mb-5 fs-5  ">
          <div className="wd-title p-3 ps-2 bg-secondary">
            {/* <h3 id="wd-assignments-title"> */}{" "}
            <BsGripVertical className="me-2 fs-3" />
            <FaCaretDown className="me-2 fs-3" />
            ASSIGNMENTS
            <span className="d-flex justify-content-lg-end">
              {/* <div className="border border-1 radius-2 rounded-pill border-black ">
                
                <p >40% of Total </p>
                </div> */}
              <span className="card-header d-flex justify-content-between align-items-center bg-gray">
                <span>40% of Total</span>
              </span>
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />{" "}
              <IoEllipsisVertical className="fs-4" />
            </span>
          </div>
          <ul
            id="wd-assignment-list"
            className="wd-lessons list-group rounded-0"
          >
            {assignments
              .filter((assignment: any) => assignment.course == cid)
              .map((assign: any) => (
                // console.log("from editor line 72" + JSON.stringify(assign.assignments))
                
                <li className="wd-assignment-list-item list-group-item p-3 ps-1 border-success border-top-0 border-end-0 border-bottom-0 border-5">
                  
                    <>
                      <BsGripVertical className="me-2 fs-3" />
                      <PiNotePencilFill className="me-2 fs-3 " />

                      <a
                        className="wd-assignment-link "
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assign._id}`}
                      >
                        {/* A1 - ENV + HTML */}

                        {assign._id}
                      </a>
                      <div>
                        <span className="text-danger">Multiple Modules </span> |{" "}
                        <b>Not available unitl</b>{" "}
                        TBD| <br /> <b>Due</b>{" "}
                        May 13 at 11:59 pm | 100 pts
                      </div>
                      <LessonControlButtons />
                    </>
                  
                  {/* </span> */}
                </li>
              ))}
            {/* <li className="wd-assignment-list-item list-group-item p-3 ps-1 border-success border-top-0 border-end-0 border-bottom-0 border-5">
              <BsGripVertical className="me-2 fs-3" />
              <PiNotePencilFill className="me-2 fs-3 " />
              <a
                className="wd-assignment-link"
                href={`#/Kanbas/Courses/${cid}/Assignments/123`}
              >
                A2 - CSS + BOOTSTRAP
              </a>
              <LessonControlButtons />
              <br />
              <span className="text-danger">Multiple Modules </span> |{" "}
              <b>Not available unitl</b> May 13 at 12:00 am | <br />
              <b>Due</b> May 20 at 11:59 pm | 100 pts
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 ps-1 border-success border-top-0 border-end-0 border-bottom-0 border-5">
              <BsGripVertical className="me-2 fs-3" />
              <PiNotePencilFill className="me-2 fs-3 " />
              <a
                className="wd-assignment-link"
                href={`#/Kanbas/Courses/${cid}/Assignments/123`}
              >
                A3 - JAVASCRIPT + REACT
              </a>
              <LessonControlButtons />
              <br />
              <span className="text-danger">Multiple Modules </span> |{" "}
              <b>Not available unitl</b> May 20 at 12:00 am | <br />
              <b>Due</b> May 27 at 11:59 pm | 100 pts
            </li> */}
          </ul>
        </li>
      </ul>
    </div>
  );
}
