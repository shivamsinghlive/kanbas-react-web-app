import { Navigate, Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";
import Profile from "./Profile";
import SignUp from "./SignUp";
import AccountNavigation from "./Navigation";
import Users from "./Users";
export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <table>
      <tr>
        <td valign="top">
          <AccountNavigation />
        </td>
        <td valign="top">
          <Routes>
            <Route
              path="/"
              element={
                <Navigate
                  to={
                    currentUser
                      ? "/Kanbas/Account/Profile"
                      : "/Kanbas/Account/Signin"
                  }
                />
              }
            />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Users/:uid" element={<Users />} />


          </Routes>
        </td>
      </tr>
    </table>
  );
}
