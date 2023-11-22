import Chart from "react-apexcharts";
import style from "../styleCharts.module.css";
import { dispersalData } from "../../../Utils/Data";
import { useEffect, useState } from "react";

const DispersaoArTemperatura = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      dispersalData("airMoisture", "temperature").then((res) => {
         setData(res);
      });
   }, []);

   if (data.length === 0) {
      return null;
   }
   // Dados de exemplo
   const series = [
      {
         name: "Umidade do Ar x Temperatura",
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
            text: "Umidade do Ar",
         },
      },
      yaxis: {
         title: {
            text: "Temperatura",
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
            <h2>Umidade do Ar x Temperatura</h2>
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

export default DispersaoArTemperatura;
