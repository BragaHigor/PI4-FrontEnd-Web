/* eslint-disable no-unused-vars */
import DispersaoAll from "../Graficos/Dispersao/DispersaoAll";
import DispersaoArSolo from "../Graficos/Dispersao/DispersaoArSolo";
import DispersaoArTemperatura from "../Graficos/Dispersao/DispersaoArTemperatura";
import DispersaoTemperaturaSolo from "../Graficos/Dispersao/DispersaoTemperaturaSolo";
import RegressaoArSolo from "../Graficos/Regressao/RegressaoArSolo";
import RegressaoArTemperatura from "../Graficos/Regressao/RegressaoArTemperatura";
import RegressaoTemperaturaSolo from "../Graficos/Regressao/RegressaoTemperaturaSolo";

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
         case "RegressaoArSolo":
            return <RegressaoArSolo />;
         case "RegressaoArTemperatura":
            return <RegressaoArTemperatura />;
         case "RegressaoTemperaturaSolo":
            return <RegressaoTemperaturaSolo />;
         default:
            return null;
      }
   };

   return <div className={style.Dash}>{renderComponent()}</div>;
};

export default RegressaoDispersao;
