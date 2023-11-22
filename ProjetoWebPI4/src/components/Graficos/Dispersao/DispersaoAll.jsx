import Chart from "react-apexcharts";
import style from "../styleCharts.module.css";
import { dispersalData } from "../../../Utils/Data";
import { useEffect, useState } from "react";

const DispersaoAll = () => {
   const [dataTemperaturaSolo, setDataTemperaturaSolo] = useState([]);
   const [dataArTemperatura, setDataArTemperatura] = useState([]);

   useEffect(() => {
      const fetchDataTemperaturaSolo = async () => {
         const result = await dispersalData("temperature", "soilMoisture" );
         setDataTemperaturaSolo(result);
      };

      const fetchDataArTemperatura = async () => {
         const result = await dispersalData("temperature", "airMoisture",);
         setDataArTemperatura(result);
      };

      fetchDataTemperaturaSolo()
      fetchDataArTemperatura()
   }, []);

   if (dataTemperaturaSolo.length === 0 || dataArTemperatura.length === 0) {
      return null;
   }

   // Dados de exemplo
   const series = [
      {
         name: "Umidade do Ar x Temperatura",
         data: dataArTemperatura.map((point) => ({
            x: point[0],
            y: point[1],
         })),
      },
      {
         name: "Umidade do Solo x Temperatura",
         data: dataTemperaturaSolo.map((point) => ({
            x: point[0],
            y: point[1],
         })),
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
            text: "Média dos últimos 30 dias",
         },
      },
      yaxis: {
         title: {
            text: "Média dos últimos 30 dias",
         },
      },
      markers: {
         size: 5
      }
   };

   return (
      <div className={style.graph}>
         <div className={style.title}>
            <h1>Gráfico de Dispersão</h1>
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

export default DispersaoAll;
