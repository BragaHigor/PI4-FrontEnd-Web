import Chart from "react-apexcharts";
import style from "../styleCharts.module.css";
import { dispersalData } from "../../../Utils/Data";
import { useEffect, useState } from "react";

const DispersaoAll = () => {
   const [dataSoloAr, setDataSoloAr] = useState([]);
   const [dataTemperaturaSolo, setDataTemperaturaSolo] = useState([]);
   const [dataArTemperatura, setDataArTemperatura] = useState([]);

   useEffect(() => {
      const fetchDataSoloAr = async () => {
         const result = await dispersalData("soilMoisture", "airMoisture");
         setDataSoloAr(result);
      };

      const fetchDataTemperaturaSolo = async () => {
         const result = await dispersalData("temperature", "soilMoisture");
         setDataTemperaturaSolo(result);
      };

      const fetchDataArTemperatura = async () => {
         const result = await dispersalData("airMoisture", "temperature");
         setDataArTemperatura(result);
      };

      fetchDataSoloAr();
      fetchDataTemperaturaSolo()
      fetchDataArTemperatura()
   }, []);

   if (dataSoloAr.length === 0 || dataTemperaturaSolo.length === 0 || dataArTemperatura.length === 0) {
      return null;
   }

   // Dados de exemplo
   const series = [
      {
         name: "Umidade do Solo x Umidade do Ar",
         data: dataSoloAr.map((point) => ({
            x: point[0],
            y: point[1],
         })),
      },
      // Dados mockados adicionais
      {
         name: "Umidade do Ar x Temperatura",
         data: dataArTemperatura.map((point) => ({
            x: point[0],
            y: point[1],
         })),
      },
      {
         name: "Temperatura x Umidade do Solo",
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
            <h2>Umidade do Solo x Umidade do Ar</h2>
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
