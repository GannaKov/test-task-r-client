import { Outlet, NavLink, useNavigate } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

export default function Root() {
  return (
    <div className="appWrapper ">
      <SideBar />

      <Outlet />
    </div>
  );
}
