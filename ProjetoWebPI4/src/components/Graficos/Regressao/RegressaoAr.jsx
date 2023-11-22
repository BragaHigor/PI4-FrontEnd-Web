// regressao ar

import Chart from "react-apexcharts";
import regression from "regression";
import style from "../styleCharts.module.css";
import { regressionData } from "../../../Utils/Data";
import { useEffect, useState } from "react";

const RegressaoAr = () => {
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
   const umidadeAr = dataRegressao.airMoisture;

   // Calcular a linha de regressão

   const days = Array.from({ length: 30 }, (_, index) => index + 1);// Adjust this according to your data

   // Pair each umidadeSolo value with its corresponding day
   const data = umidadeAr.map((value, index) => [days[index], value]);

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
            text: "Umidade do Ar",
         },
      },
      markers: {
         size: 7,
         colors: ["#00c076", "#ff0000"],
      },
   };

   // Dados do gráfico
   const series = [
      {
         name: "Umidade do Ar",
         data: umidadeAr,
         color: "#00c076",
      },
      {
         name: "Linha Regressao",
         data: regressionPoints,
         color: "#ff0000",
      },
   ];

   return (
      <div className={style.graph}>
         <div className={style.title}>
            <h1>Gráfico de Regressão:</h1>
            <h2>Umidade do Ar</h2>
         </div>
         <Chart
            options={options}
            series={series}
            type="line"
            height={300}
            width={950}
         />
      </div>
   );
};

export default RegressaoAr;
