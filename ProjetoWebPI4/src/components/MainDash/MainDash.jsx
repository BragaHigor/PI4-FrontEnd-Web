import Cards from "../Cards/Cards";
// import BasicTable from "../Table/Table";
import style from "./styleMainDash.module.css";
import RegressaoDispersao from "../RegressaoDispersao/RegressaoDispersao";

const MainDash = () => {
   return (
      <div className={style.MainDash}>
         <div className={style.Title}>
            <h1>Dashboard</h1>
         </div>
         <Cards />
         <div className={style.Table}>
            <RegressaoDispersao />
         </div>
      </div>
   );
};

export default MainDash;
