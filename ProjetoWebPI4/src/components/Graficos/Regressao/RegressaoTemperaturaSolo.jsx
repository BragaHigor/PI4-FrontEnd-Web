import Chart from "react-apexcharts";
import regression from "regression";
import style from "../styleCharts.module.css";

const RegressaoTemperaturaSolo = () => {
   // Dados de exemplo (substitua pelos seus dados reais)
   const temperatura = [20, 30, 35, 40, 45, 50, 60, 65];
   const umidadeSolo = [30, 40, 45, 50, 35, 40, 60, 55];

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
         colors: ['#00c076', '#0048ce'],
      },
   };

   // Dados do gráfico
   const series = [
      {
         name: "Umidade do Solo",
         data: umidadeSolo,
         color: '#00c076',
      },
      {
         name: "Temperatura",
         data: regressionPoints,
         color: '#0048ce',
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
