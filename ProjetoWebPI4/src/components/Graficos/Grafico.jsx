/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Grafico = ({ data }) => {
   const [chartState] = useState({
      series: [
         {
            name: "Review",
            data: data,
         },
      ],
      options: {
         chart: {
            height: "auto",
            zoom: {
               enabled: false,
            },
            toolbar: {
               show: false,
            },
         },
         dataLabels: {
            enabled: false,
         },
         stroke: {
            curve: "smooth",
            width: 1,
            colors: ["#006A42"],
         },
         grid: {
            row: {
               colors: ["#ECEDEF", "transparent"],
               opacity: 0.5,
            },
            show: false,
         },
         xaxis: {
            labels: {
               show: false, // Isso oculta as etiquetas no eixo X
            },
            axisBorder: {
               show: false, // Isso oculta as linhas do eixo X
            },
            axisTicks: {
               show: false, // Isso oculta as marcas do eixo X
            },
         },
         yaxis: {
            show: false,
         },
         tooltip: {
            enabled: false, // Desativa a animação ao passar o mouse
         },
      },
   });

   return (
      <div id="chart">
         <ReactApexChart
            options={chartState.options}
            series={chartState.series}
            type="line"
            height={100}
         />
      </div>
   );
};

export default Grafico;
