import Chart from "react-apexcharts";
import regression from "regression";
import style from "../styleCharts.module.css";
import { regressionData } from "../../../Utils/Data";
import { useEffect, useState } from "react";

const RegressaoTemperaturaSolo = () => {
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
   const umidadeSolo = dataRegressao.soilMoisture;

   // Calcular a linha de regressão
   const data = temperatura.map((value, index) => [value, umidadeSolo[index]]);
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
            text: "Temperatura",
         },
      },
      yaxis: {
         title: {
            text: "Umidade do Solo",
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
         name: "Umidade do Solo",
         data: umidadeSolo,
         color: "#00c076",
      },
      {
         name: "Temperatura",
         data: regressionPoints,
         color: "#0048ce",
      },
   ];

   return (
      <div className={style.graph}>
         <div className={style.title}>
            <h1>Gráfico de Regressão</h1>
            <h2>Temperatura x Umidade do Solo</h2>
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

export default RegressaoTemperaturaSolo;
