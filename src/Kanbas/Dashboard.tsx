import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
    <div className="row row-cols-1 row-cols-md-5 g-4">
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>



        
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2002/Home"
          >
            <img src="/images/spanish.jpg" alt="spanish" width={200} />
            <div>
              <h5>CS2002 Spanish </h5>
              <p className="wd-dashboard-course-title">
                Learn Spanish Language
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        </div>


        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/4000/Home"
          >
            <img src="/images/aws.jpg" alt="aws" width={200} />
            <div>
              <h5>CS4000 AWS</h5>
              <p className="wd-dashboard-course-title">
                Amazon Web Services Fundamentals
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1400/Home"
          >
            <img src="/images/cpp.jpg" alt="cpp" width={200} />
            <div>
              <h5>CS1400 C++</h5>
              <p className="wd-dashboard-course-title">
                C++ Development for beginners
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2100/Home"
          >
            <img src="/images/sql.jpg" alt="cpp" width={200} />
            <div>
              <h5>CS2100 SQL </h5>
              <p className="wd-dashboard-course-title">
                Structured Query Language
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2000/Home"
          >
            <img src="/images/ios.jpg" alt="ios" width={200} />
            <div>
              <h5>CS2000 IOS Application Development</h5>
              <p className="wd-dashboard-course-title">
                IOS Developer Course
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1100/Home"
          >
            <img src="/images/kotlin.jpg" alt="kotlin" width={200} />
            <div>
              <h5>CS1100 Kotlin</h5>
              <p className="wd-dashboard-course-title">
                Android Development Course
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1000/Home"
          >
            <img src="/images/pdp.jpg" alt="java" width={200} />
            <div>
              <h5>CS1000 Java</h5>
              <p className="wd-dashboard-course-title">
                Java - Object Oriented Programming Concepts
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
       
      </div>
    </div>
  );
}
