import { Routes, Route, Navigate } from "react-router-dom";
import Accounts from "./Accounts";
import Dashboard from "./Dashboard/index";
import Courses from "./Courses/index";
import AccountNavigation from "./Navigation";
import "./index.css";
import * as db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import ProtectedRoute from "./Accounts/ProtectedRoute";

const Kanbas = () => {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([
      ...courses,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div id="wd-kanbas" className="kanbas">
        <div>
          <table>
            <tbody>
              <AccountNavigation />
              <div className="wd-main-content-offset p-3">
                <Routes>
                  <Route
                    path="/"
                    // element={<Navigate to="Accounts/SignIn" replace />}
                    element={<Navigate to="Dashboard" replace />}
                  />
                  <Route path="Account/*" element={<Accounts />} />
                  <Route
                    path="Dashboard/*"
                    element={
                      <ProtectedRoute>
                        <Dashboard
                          courses={courses}
                          course={course}
                          setCourse={setCourse}
                          addNewCourse={addNewCourse}
                          deleteCourse={deleteCourse}
                          updateCourse={updateCourse}
                        />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="Courses/:cid/*"
                    element={
                      <ProtectedRoute>
                        <Courses courses={courses} />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="Calendar" element={<h1>Calendar</h1>} />
                  <Route path="Inbox" element={<h1>Inbox</h1>} />
                </Routes>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </Provider>
  );
};

export default Kanbas;
