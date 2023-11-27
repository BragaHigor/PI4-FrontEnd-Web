// regressao temp

import Chart from "react-apexcharts";
import regression from "regression";
import style from "../styleCharts.module.css";
import { regressionData } from "../../../Utils/Data";
import { useEffect, useState } from "react";

const RegressaoTemperatura = () => {
   const [dataRegressao, setDatadataRegressao] = useState([]);

   useEffect(() => {
      regressionData().then((res) => {
         setDatadataRegressao(res);
      });
   }, []);

   if (dataRegressao.length === 0) {
      return null;
   }
   // Dados de exemplo (substitua pelos seus dados reais)
   const temperatura = dataRegressao.temperature;

   // Calcular a linha de regressão

   const days = Array.from({ length: 72 }, (_, index) => index + 1);// Adjust this according to your data

   // Pair each umidadeSolo value with its corresponding day
   const data = temperatura.map((value, index) => [days[index], value]);

   // Perform linear regression
   const result = regression.linear(data);

   // Get the y-values from the regression result
   const regressionPoints = result.points.map((point) => point[1]);

   // Configuração do gráfico
   const options = {
      chart: {
         id: "scatter-regression",
         zoom: {
            enabled: false,
         },
         toolbar: {
            show: false,
         },
      },
      xaxis: {
         title: {
            text: "Dias",
         },
      },
      yaxis: {
         title: {
            text: "Temperatura",
         },
      },
      markers: {
         size: 5,
         colors: ['#00c076', '#0051ff'],
      },
   };

   // Dados do gráfico
   const series = [
      {
         name: "Temperatura",
         data: temperatura,
         type: "line",
         color: '#00c076',
      },
      {
         name: "Linha de Regressão",
         type: "line",
         data: regressionPoints,
         color: '#0051ff',
      },
   ];

   return (
      <div className={style.graph}>
         <div className={style.title}>
            <h1>Gráfico de Regressão: Temperatura</h1>
         </div>
         <Chart 
            options={options} 
            series={series} 
            height={300}
            width={950}
         />
      </div>
   );
};

export default RegressaoTemperatura;
