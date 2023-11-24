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
         name: "Umidade do Ar",
         type: 'scatter',
         data: dataArTemperatura
      },
      {
         name: "Umidade do Solo",
         type: 'scatter',
         data: dataTemperaturaSolo
      }
   ];

   const options = {
      chart: {
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
         type: 'numeric'
      },
      yaxis: {
         title: {
            text: "Porcentagem %",
         },
      },
      markers: {
         size: 5
      }
   };

   return (
      <div className={style.graph}>
         <div className={style.title}>
            <h1>Dispersão últimos 30 dias</h1>
         </div>
         <Chart
            options={options}
            series={series}
            height={300}
            width={1250}
         />
      </div>
   );
};

export default DispersaoAll;
