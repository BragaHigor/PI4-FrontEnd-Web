/* eslint-disable no-unused-vars */
import DispersaoAll from "../Graficos/Dispersao/DispersaoAll";
import DispersaoArSolo from "../Graficos/Dispersao/DispersaoArSolo";
import DispersaoArTemperatura from "../Graficos/Dispersao/DispersaoArTemperatura";
import DispersaoTemperaturaSolo from "../Graficos/Dispersao/DispersaoTemperaturaSolo";
import RegressaoAr from "../Graficos/Regressao/RegressaoAr";
import RegressaoTemperatura from "../Graficos/Regressao/RegressaoTemperatura";
import RegressaoSolo from "../Graficos/Regressao/RegressaoSolo";

import style from "./styleCharts.module.css";

import { useGraphContext } from "../../contexts/auth";

const RegressaoDispersao = () => {
   const { selectedGraph, setSelectedGraph } = useGraphContext();

   const renderComponent = () => {
      switch (selectedGraph) {
         case "DispersaoAll":
            return <DispersaoAll />;
         case "DispersaoArSolo":
            return <DispersaoArSolo />;
         case "DispersaoArTemperatura":
            return <DispersaoArTemperatura />;
         case "DispersaoTemperaturaSolo":
            return <DispersaoTemperaturaSolo />;
         case "RegressaoAr":
            return <RegressaoAr />;
         case "RegressaoTemperatura":
            return <RegressaoTemperatura />;
         case "RegressaoSolo":
            return <RegressaoSolo />;
         default:
            return null;
      }
   };

   return <div className={style.Dash}>{renderComponent()}</div>;
};

export default RegressaoDispersao;
