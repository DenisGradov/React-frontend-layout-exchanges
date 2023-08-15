import { Outlet } from "react-router-dom";
import Top from "../Top/Top";

function MainLayout() {
  return (
    <div>
      <Top />
      <Outlet />
    </div>
  );
}

export default MainLayout;
