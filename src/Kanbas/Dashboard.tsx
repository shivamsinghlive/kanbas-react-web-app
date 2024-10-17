// import { Link } from "react-router-dom";
// import * as db from "./Database"

// export default function Dashboard() {
//   const courses=db.courses;
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>  <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home"
//               >
//                 <img src="/images/reactjs.jpg" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1234 React JS
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Full Stack software developer
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/2002/Home"
//               >
//                 <img src="/images/spanish.jpg" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS2002 Spanish
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Learn Spanish Language
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/4000/Home"
//               >
//                 <img src="/images/aws.jpg" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS4000 AWS
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Amazon Web Services Fundamentals
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1400/Home"
//               >
//                 <img src="/images/cpp.jpg" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1400 C++
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Amazon Web Services Fundamentals
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/2100/Home"
//               >
//                 <img src="/images/sql.jpg" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS2100 SQL
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Amazon Web Services Fundamentals
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/2000/Home"
//               >
//                 <img src="/images/ios.jpg" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS2000 IOS Application Development
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     IOS Developer Course
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1100/Home"
//               >
//                 <img src="/images/kotlin.jpg" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1100 Kotlin
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Android Development Course
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card rounded-3 overflow-hidden">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1000/Home"
//               >
//                 <img src="/images/pdp.jpg" width="100%" height={160} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1000 Java
//                   </h5>
//                   <p className="wd-dashboard-course-title card-text">
//                     Java - Object Oriented Programming Concepts
//                   </p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src={`${course.img}`} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}{" "}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
