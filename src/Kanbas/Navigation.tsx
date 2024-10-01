import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/neu.svg" width="75px" />
      </a>
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        Account{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0
              bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        Dashboard{" "}
      </Link>
      <Link
        to="/Kanbas/Dashboard"
        id="wd-course-link"
        className="list-group-item text-white
              bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        Courses{" "}
      </Link>
      <br />
      {/* complete styling the rest of the links */}

      <br />
      <Link to="/Kanbas/Dashboard" id="wd-course-link">
        Courses
      </Link>
      <br />
      <Link to="/Kanbas/Calendar" id="wd-calendar-link">
        Calendar
      </Link>
      <br />
      <Link to="/Kanbas/Inbox" id="wd-inbox-link">
        Inbox
      </Link>
      <br />
      <Link to="/Labs" id="wd-labs-link">
        Labs
      </Link>
      <br />
    </div>
  );
}
