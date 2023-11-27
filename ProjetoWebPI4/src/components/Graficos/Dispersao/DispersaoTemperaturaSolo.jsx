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
         name: "Umidade do Solo",
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
            text: "Temperatura (ºC)",
         },
      },
      yaxis: {
         title: {
            text: "Umidade do Solo (%)",
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
            <h1>Dispersão últimos 30 dias: Temperatura x Umidade do Solo</h1>
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
