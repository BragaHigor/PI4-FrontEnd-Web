import Chart from "react-apexcharts";
import regression from "regression";

const RegressaoArSolo = () => {
   // Dados de exemplo (substitua pelos seus dados reais)
   const umidadeAr = [20, 30, 35, 40, 45, 50, 60, 65];
   const umidadeSolo = [30, 40, 45, 50, 35, 40, 60, 55];

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
            text: "Umidade do Ar",
         },
      },
      yaxis: {
         title: {
            text: "Umidade do Solo",
         },
      },
      markers: {
         size: 6,
      },
   };

   // Dados do gráfico
   const series = [
      {
         name: "Umidade do Solo",
         data: umidadeSolo,
      },
      {
         name: "Umidade do Ar",
         data: regressionPoints,
      },
   ];

   return (
      <div>
         <h1>Gráfico de Regressão</h1>
         <br />
         <h2>Umidade do Solo vs Umidade do Ar</h2>
         <Chart options={options} series={series} type="scatter" height={300} />
      </div>
   );
};

export default RegressaoArSolo;
