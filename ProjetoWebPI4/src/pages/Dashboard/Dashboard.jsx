import style from "./styleDashboard.module.css";

import MainDash from "../../components/MainDash/MainDash";
import RightSide from "../../components/RightSide/RightSide";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
   return (
      <div className={style.App}>
         <div className={style.AppGlass}>
            <Sidebar />
            <MainDash />
            <RightSide />
         </div>
      </div>
   );
};

export default Dashboard;
