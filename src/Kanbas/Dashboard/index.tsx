import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, unenrollCourse, toggleIsEnrolling } from "./reducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector(
    (state: any) => state.enrollmentsReducer.enrollments
  );

  const dispatch = useDispatch();
  const userRole = currentUser.role;

  const isEnrollingFromStore = useSelector(
    (state: any) => state.enrollmentsReducer.isEnrolling
  );
  // const isEnrolling = userRole === "STUDENT" ? isEnrollingFromStore : false;
  const isEnrolling = isEnrollingFromStore;

  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse({ userId: currentUser._id, courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
  };

  const handleEnrollmentsClick = () => {
    dispatch(toggleIsEnrolling());
  };

  // Filter enrollments by the current user ID
  const enrolledCourseIds = new Set(
    enrollments
      .filter((enrollment: any) => enrollment.user === currentUser._id)
      .map((enrollment: any) => enrollment.course)
  );

  // Use the filtered list to display only the unique enrolled courses for this user
  const uniqueEnrolledCourses = courses.filter((course) =>
    enrolledCourseIds.has(course._id)
  );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      {userRole === "FACULTY" && (
        <div className="card p-3 mb-4">
          <h5 className="mb-3">
            New Course
            <button
              className="btn btn-primary ms-3 m-2"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning me-2 m-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <div className="mb-2">
            <input
              value={course.name}
              className="form-control mb-3"
              placeholder="Course Name"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <textarea
              value={course.description}
              className="form-control"
              placeholder="Course Description"
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
            />
          </div>
        </div>
      )}
      {/* {userRole === "STUDENT" && ( */}
      <div className="card border-0 pt-2 mb-1">
        <div className="d-flex justify-content-between align-items-center">
          <h2 id="wd-dashboard-published">
            {isEnrolling
              ? "Published Courses (" + courses.length + ")"
              : "Published Courses (" + uniqueEnrolledCourses.length + ")"}
          </h2>
          <button
            className="btn btn-primary"
            id="wd-enroll-course-click"
            onClick={handleEnrollmentsClick}
          >
            {isEnrolling ? "Show Enrolled Courses" : "Show All Courses"}
          </button>
        </div>
      </div>
      {/* )} */}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {isEnrolling
            ? // Showing all unique courses with Enroll/Unenroll buttons
              courses.map((course) => (
                <div
                  className="wd-dashboard-course col"
                  key={course._id}
                  style={{ width: "300px" }}
                >
                  <div className="card rounded-3 overflow-hidden">
                    {/* <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    > */}
                    <img
                      src={
                        course.img
                          ? require(`../Database/imgs/${course.img}`)
                          : "https://miro.medium.com/v2/1*K0a7xINk0RM5gfXGSN68cw.png"
                      }
                      width="100%"
                      height={160}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      {/* Check if the user is enrolled in the course */}
                      {enrollments.some(
                        (enrollment: any) =>
                          enrollment.user === currentUser._id &&
                          enrollment.course === course._id
                      ) ? (
                        <button
                          className="btn btn-danger"
                          onClick={() => handleUnenroll(course._id)}
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          onClick={() => handleEnroll(course._id)}
                        >
                          Enroll
                        </button>
                      )}
                    </div>
                    {/* </Link> */}
                  </div>
                </div>
              ))
            : // Show only enrolled courses
              uniqueEnrolledCourses.map((course) => (
                <div
                  className="wd-dashboard-course col"
                  key={course._id}
                  style={{ width: "300px" }}
                >
                  <div className="card rounded-3 overflow-hidden">
                    <img
                      src={
                        course.img
                          ? require(`../Database/imgs/${course.img}`)
                          : "https://miro.medium.com/v2/1*K0a7xINk0RM5gfXGSN68cw.png"
                      }
                      width="100%"
                      height={160}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="btn btn-primary"
                      >
                        Go
                      </Link>
                      {userRole === "FACULTY" && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                      )}
                      {userRole === "FACULTY" && (
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            console.log("Button clicked");
                            console.log("Current course:", course);
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
