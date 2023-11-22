import Chart from "react-apexcharts";
import style from "../styleCharts.module.css";
import { dispersalData } from "../../../Utils/Data";
import { useEffect, useState } from "react";

const DispersaoTemperaturaSolo = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      dispersalData("temperature", "soilMoisture").then((res) => {
         setData(res);
      });
   }, []);

   if (data.length === 0) {
      return null;
   }
   // Dados de exemplo
   const series = [
      {
         name: "Temperatura x Umidade do Solo",
         data: data,
      },
   ];

   const options = {
      chart: {
         type: "scatter",
         zoom: {
            enabled: false,
         },
         toolbar: {
            show: false,
         },
      },
      xaxis: {
         title: {
            text: "Temperatura",
         },
      },
      yaxis: {
         title: {
            text: "Umidade do Solo",
         },
      },
      markers: {
         size: 5,
         colors: ["#33dda2", "#00256a"], // Adicione mais cores conforme necessário
      },
   };

   return (
      <div className={style.graph}>
         <div className={style.title}>
            <h1>Gráfico de Dispersão</h1>
            <h2>Temperatura x Umidade do Solo</h2>
         </div>
         <Chart
            options={options}
            series={series}
            type="scatter"
            height={300}
            width={950}
         />
      </div>
   );
};

export default DispersaoTemperaturaSolo;
