import { Link } from "react-router-dom";

export default function Dashboard() {
  const courses = [
    {
      id: "1234",
      title: "CS1234 React JS",
      description: "Full Stack software developer",
      image: "images/React.jpg",
    },
    {
      id: "5636",
      title: "CS5636 Azure",
      description: "Cloud Computing",
      image: "images/Azure.jpeg",
    },
    {
      id: "3456",
      title: "CS3456 AWS",
      description: "Cloud Computing",
      image: "images/AWS.jpeg",
    },
    {
      id: "5678",
      title: "CS5678 Python",
      description: "Programming",
      image: "images/Python.jpeg",
    },
    {
      id: "7977",
      title: "CS7977 Java",
      description: "Programming",
      image: "images/Java.jpeg",
    },
    {
      id: "6736",
      title: "CS6736 SQL",
      description: "Database Management",
      image: "images/Sql.jpeg",
    },
    {
      id: "6500",
      title: "CS6500 Machine Learning",
      description: "Machine Learning",
      image: "images/download (1).jpeg",
    },
    {
      id: "8788",
      title: "CS8788 NLP",
      description: "Machine Learning",
      image: "images/NLP.png",
    },
  ];

  return (
    <div id="wd-dashboard" className="container mt-3">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4"
      >
        {courses.map((course) => (
          <div key={course.id} className="col">
            <div className="card rounded-3 overflow-hidden" style={{ width: "250px" }}>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to={`/Kanbas/Courses/${course.id}/Home`}
              >
                <img src={course.image} className="card-img-top" alt={course.title} style={{ height: "160px" }} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">{course.title}</h5>
                  <p className="wd-dashboard-course-description card-text">{course.description}</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}