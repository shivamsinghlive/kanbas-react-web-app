// import CoursesNavigation from "./Navigation";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/Editor";
// import { Navigate, Route, Routes, useParams } from "react-router";
// import { FaAlignJustify } from "react-icons/fa";
// import PeopleTable from "./People/Table";
// import { courses } from "../Database";
// export default function Courses() {
//   const { cid } = useParams();
//   const course = courses.find(
//     (course: { _id: string | undefined }) => course._id === cid
//   );

//   return (
//     <div id="wd-courses">
//       <div id="wd-courses">
//         <h2 className="text-danger">
//           <FaAlignJustify className="me-4 fs-4 mb-1" />

//           {course && course.name}
//         </h2>{" "}
//         <hr />
//         <div className="d-flex">
//           <div className="d-none d-md-block">
//             <CoursesNavigation />
//           </div>
//           <div className="flex-fill">
//             <Routes>
//               <Route path="Home" element={<Home />} />
//               <Route path="Modules" element={<Modules />} />
//               <Route path="Assignments" element={<Assignments />} />
//               <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//               <Route path="People" element={<PeopleTable />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa6";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
    </div>
  );
}

