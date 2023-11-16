import Chart from "react-apexcharts";
import regression from "regression";
import style from "../styleCharts.module.css";

const RegressaoArTemperatura = () => {
   // Dados de exemplo (substitua pelos seus dados reais)
   const umidadeAr = [20, 30, 35, 40, 45, 50, 60, 65];
   const temperatura = [30, 40, 45, 50, 35, 40, 60, 55];

   // Calcular a linha de regressão
   const data = umidadeAr.map((value, index) => [value, temperatura[index]]);
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
            text: "Umidade do Ar",
         },
      },
      markers: {
         size: 7,
         colors: ['#00c076', '#0048ce'],
      },
   };

   // Dados do gráfico
   const series = [
      {
         name: "Temperatura",
         data: temperatura,
         color: '#00c076',
      },
      {
         name: "Umidade do Ar",
         data: regressionPoints,
         color: '#0048ce',
      },
   ];

   return (
      <div>
         <div className={style.title}>
            <h1>Gráfico de Regressão</h1>
            <h2>Umidade do Ar x Temperatura</h2>
         </div>
         <Chart 
            options={options} 
            series={series} 
            type="line" 
            height={300}
         />
      </div>
   );
};

export default RegressaoArTemperatura;
