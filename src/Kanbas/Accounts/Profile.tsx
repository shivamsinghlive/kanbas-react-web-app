import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div id="wd-profile-screen" className="d-flex justify-content-center">
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h2>Profile</h2>
          <input
            id="wd-username"
            value={profile.username}
            placeholder="username"
            className="form-control mb-2"
          />
          <br />
          <input
            id="wd-password"
            value={profile.password}
            placeholder="password"
            type="password"
            className="form-control mb-2"
          />
          <br />
          <input
            id="wd-firstname"
            value={profile.firstName}
            placeholder="First Name"
            className="form-control mb-2"
          />
          <br />
          <input
            id="wd-lastname"
            value={profile.lastName}
            placeholder="Last Name"
            className="form-control mb-2"
          />
          <br />
          {/* <input
            id="wd-dob"
            value="2000-01-01"
            type="date"
            className="form-control mb-2"
          />
          <br /> */}
          <input
            id="wd-email"
            value={profile.email}
            type="email"
            className="form-control mb-2"
          />
          <br />
          <select
            id="wd-role"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            {/* <option value="USER">User</option> */}
            {/* <option value="ADMIN">Admin</option> */}
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <br />
          {/* <Link className="btn btn-danger w-100 p-2" to="../SignIn">
            Sign out
          </Link> */}
          <button
            onClick={signout}
            className="btn btn-danger w-100 mb-2"
            id="wd-signout-btn"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
