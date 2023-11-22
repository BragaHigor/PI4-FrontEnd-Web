import Chart from "react-apexcharts";
import regression from "regression";
import style from "../styleCharts.module.css";
import { regressionData } from "../../../Utils/Data";
import { useEffect, useState } from "react";

const RegressaoArSolo = () => {
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
   const umidadeSolo = dataRegressao.soilMoisture;

   // Calcular a linha de regressão
   const data = umidadeAr.map((value, index) => [value, umidadeSolo[index]]);
   const result = regression.linear(data, { order: 2 });
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
            text: "Umidade do Solo",
         },
      },
      yaxis: {
         title: {
            text: "Umidade do Ar",
         },
      },
      markers: {
         size: 7,
         colors: ["#00c076", "#0048ce"],
      },
   };

   // Dados do gráfico
   const series = [
      {
         name: "Umidade Ar x Solo",
         data: umidadeSolo,
         color: "#00c076",
      },
      {
         name: "R²",
         data: regressionPoints,
         color: "#0048ce",
      },
   ];

   return (
      <div className={style.graph}>
         <div className={style.title}>
            <h1>Gráfico de Regressão</h1>
            <h2>Umidade do Solo x Umidade do Ar</h2>
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

export default RegressaoArSolo;
