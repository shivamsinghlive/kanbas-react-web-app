import "./LandingPage.css";
import { FaGithub } from "react-icons/fa";
import TableRow from "./tableRows";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import LabWork from "../Labs";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="row">
        <div className="col" />
        <div className="col-6">
          <div className="headings-card">
            <h1>Shivam Singh</h1>
            <h2>Sec 03</h2>
          </div>
        </div>
        <div className="col" />
      </div>
      <div className="button-container">
        <a href="https://github.com/shivamsinghlive/kanbas-react-web-app/tree/a4">
          <button className="button">
            {" "}
            Source Code Repository <FaGithub />
          </button>
        </a>

        <Link to="/">
          <button className="button">
            Go to Landing Page <BsArrowUpRightSquare />
          </button>
        </Link>

        <Link to="/labwork/*">
          <button className="button">
            Go to Lab Work <BsArrowUpRightSquare />
          </button>
        </Link>

        <Link to="/kanbas">
          <button className="button">
            Go to Kanbas <BsArrowUpRightSquare />
          </button>
        </Link>
      </div>
      

 
    </div>
  );
};

export default LandingPage;
