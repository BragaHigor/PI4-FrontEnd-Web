import Chart from 'react-apexcharts';

const ScatterChart = () => {
  // Dados de exemplo
  const series = [
    {
      name: 'Umidade do Solo vs Umidade do Ar',
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
         [90, 0]
        // Adicione mais pontos conforme necessário
      ],
    },
  ];

  const options = {
    chart: {
      type: 'scatter',
      zoom: {
         enabled: false,
      },
      toolbar: {
         show: false,
      },
    },
    xaxis: {
      title: {
        text: 'Umidade do Ar',
      },
    },
    yaxis: {
      title: {
        text: 'Umidade do Solo',
      },
    },
  };

  return (
    <div>
      <h1>Gráfico de Dispersão</h1>
      <br />
      <h2>Umidade do Solo vs Umidade do Ar</h2>
      <Chart options={options} series={series} type="scatter" height={300} />
    </div>
  );
};

export default ScatterChart;
