import Chart from "react-apexcharts";
import style from "../styleCharts.module.css";

const DispersaoArTemperatura = () => {
   // Dados de exemplo
   const series = [
      {
         name: "Umidade do Ar x Temperatura",
         data: [
            [25, 45],
            [70, 15],
            [10, 80],
            [35, 92],
            [60, 20],
            [45, 70],
            [85, 40],
            [5, 60],
            [30, 75],
            [50, 10],
            [15, 50],
            [80, 30],
            [40, 65],
            [95, 25],
            [20, 35],
            [55, 90],
            [75, 5],
            [0, 55],
            [65, 85],
            [90, 0],
            // Adicione mais pontos conforme necessário
         ],
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
         size: 7,
         colors: ['#006A42', '#00256a'], // Adicione mais cores conforme necessário
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
            series={series} type="scatter" 
            height={300} width={950}
         />
      </div>
   );
};

export default DispersaoArTemperatura;
