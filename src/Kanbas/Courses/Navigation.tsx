import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const links_link = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  const links = [
    { label: "Home", path: "/Kanbas/Courses/", remainPath: "/Home" },
    { label: "Modules", path: "/Kanbas/Courses/", remainPath: "/Modules" },
    { label: "Piazza", path: "/Kanbas/Courses/", remainPath: "/Piazza" },
    { label: "Zoom", path: "/Kanbas/Courses/", remainPath: "/Zoom" },
    {
      label: "Assignments",
      path: "/Kanbas/Course/",
      remainPath: "/Assignments",
    },
    { label: "Quizzes", path: "/Kanbas/Course/", remainPath: "/Quizzes" },
    { label: "Grades", path: "/Kanbas/Course/", remainPath: "/Grades" },
    { label: "People", path: "/Kanbas/Course/", remainPath: "/People" },
  ];

  const { pathname } = useLocation();
  const { cid } = useParams();
  console.log("inside navigation ... " + cid);

  // return (
  //   <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
  //     <Link
  //       to="/Kanbas/Courses/1234/Home"
  //       id="wd-course-home-link"
  //       className="list-group-item active border border-0"
  //     >
  //       {" "}
  //       Home{" "}
  //     </Link>
  //     <Link
  //       to="/Kanbas/Courses/1234/Modules"
  //       id="wd-course-modules-link"
  //       className="list-group-item text-danger border border-0"
  //     >
  //       {" "}
  //       Modules{" "}
  //     </Link>
  //     <Link
  //       to="/Kanbas/Courses/1234/Piazza"
  //       id="wd-course-piazza-link"
  //       className="list-group-item text-danger border border-0"
  //     >
  //       {" "}
  //       Piazza{" "}
  //     </Link>
  //     <Link
  //       to="/Kanbas/Courses/1234/Zoom"
  //       id="wd-course-zoom-link"
  //       className="list-group-item text-danger border border-0"
  //     >
  //       {" "}
  //       Zoom{" "}
  //     </Link>
  //     <Link
  //       to="/Kanbas/Courses/1234/Assignments"
  //       id="wd-course-quizzes-link"
  //       className="list-group-item text-danger border border-0"
  //     >
  //       {" "}
  //       Assignments{" "}
  //     </Link>
  //     <Link
  //       to="/Kanbas/Courses/1234/Quizzes"
  //       id="wd-course-assignments-link"
  //       className="list-group-item text-danger border border-0"
  //     >
  //       {" "}
  //       Quizzes{" "}
  //     </Link>
  //     <Link
  //       to="/Kanbas/Courses/1234/People"
  //       id="wd-course-people-link"
  //       className="list-group-item text-danger border border-0"
  //     >
  //       {" "}
  //       People{" "}
  //     </Link>
  //   </div>
  // );

  // return (

  //   <div>
  //       {links.map((link) => (
  //       <Link
  //         key=`{link.path} {cid}
  //         to={link.path}
  //         className={`list-group-item bg-black text-center border-0
  //             ${
  //               pathname.includes(link.label)
  //                 ? "active"
  //                 : "text-danger"
  //             }`}
  //       ></Link>
  //   </div>
  // )

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {/* {links.map((link) => (
        <Link
          key={`${link.path}${cid}${link.remainPath}`}
          to={`${link.path}${cid}${link.remainPath}`}
          className={`list-group-item border border-0
              ${pathname.includes(link.label) ? "active" : "text-danger"}`}
        >
          <br />
          {link.label}
        </Link> */}
      {/* ))} */}

      <Link
        to="/Kanbas/Courses/1234/Home"
        id="wd-course-home-link"
        className="list-group-item active border border-0"
      >
        {" "}
        Home{" "}
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Modules"
        id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Modules{" "}
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Piazza{" "}
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Zoom{" "}
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Assignments"
        id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Assignments{" "}
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Quizzes"
        id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Quizzes{" "}
      </Link>
      <Link
        to="/Kanbas/Courses/1234/People"
        id="wd-course-people-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        People{" "}
      </Link>
    </div>
  );
}
