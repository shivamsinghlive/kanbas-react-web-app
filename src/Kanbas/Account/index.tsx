import { useSelector } from "react-redux";
import AccountNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
// import Signin from "./signin";
import Profile from "./Profile";
import Users from "./Users";
import Signup from "./Signup";
import Signin from "./Signin";
// import Signin from "./signin";
// import Signin from "./signin";

// import Signup from "./Signup";
export default function Account() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
      <div id="wd-account-screen">
        <table>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/"
                       element={<Navigate to={ currentUser ? "/Kanbas/Account/Profile" : "Kanbas/Account/Signin" }/>} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Users" element={<Users />}/>
                <Route path="/Users/:uid" element={<Users />}/>
              </Routes>
            </td>
          </tr>
        </table>
      </div>
  );}
  