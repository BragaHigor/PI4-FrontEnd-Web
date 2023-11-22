import Chart from "react-apexcharts";
import style from "../styleCharts.module.css";
import { dispersalData } from "../../../Utils/Data";
import { useEffect, useState } from "react";

const DispersaoArSolo = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await dispersalData("soilMoisture", "airMoisture");
         setData(result);
      };

      fetchData();
   }, []);

   if (data.length === 0) {
      return null;
   }

   // Dados de exemplo
   const series = [
      {
         name: "Umidade do Solo x Umidade do Ar",
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
            text: "Umidade do Solo",
         },
      },
      yaxis: {
         title: {
            text: "Umidade do Ar",
         },
      },
      markers: {
         size: 5,
         colors: ["#ee8f37", "#00256a"], // Adicione mais cores conforme necessário
      },
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

export default DispersaoArSolo;
