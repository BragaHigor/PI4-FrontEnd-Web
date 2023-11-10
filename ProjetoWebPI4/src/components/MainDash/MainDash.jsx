import Cards from "../Cards/Cards";
import BasicTable from "../Table/Table";
import style from "./styleMainDash.module.css";

const MainDash = () => {
   return (
      <div className={style.MainDash}>
         <h1>Dashboard</h1>
         <Cards />
         <BasicTable />
      </div>
   );
};

export default MainDash;
