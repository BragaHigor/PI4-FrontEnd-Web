/* eslint-disable no-unused-vars */
import DispersaoArSolo from "../Graficos/Dispersao/DispersaoArSolo";
import DispersaoArTemperatura from "../Graficos/Dispersao/DispersaoArTemperatura";
import DispersaoTemperaturaSolo from "../Graficos/Dispersao/DispersaoTemperaturaSolo";
import RegressaoArSolo from "../Graficos/Regressao/RegressaoArSolo";
import RegressaoArTemperatura from "../Graficos/Regressao/RegressaoArTemperatura";
import RegressaoTemperaturaSolo from "../Graficos/Regressao/RegressaoTemperaturaSolo";

import { useGraphContext }  from '../../contexts/auth'

const RegressaoDispersao = () => {
  const { selectedGraph, setSelectedGraph } = useGraphContext();

  const renderComponent = () => {
    switch (selectedGraph) {
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

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default RegressaoDispersao;