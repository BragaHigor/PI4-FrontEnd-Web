// dara
/* eslint-disable no-unsafe-optional-chaining */
import Logo from "../assets/icon.png";
import http from "../db/http";

export const SidebarDispersao = [
   {
      heading: "Solo x Ar",
      graphType: "DispersaoArSolo",
   },
   {
      heading: "Ar x Temperatura",
      graphType: "DispersaoArTemperatura",
   },
   {
      heading: "Temperatura x Solo",
      graphType: "DispersaoTemperaturaSolo",
   },
];

export const SidebarRegressao = [
   {
      heading: "Ar",
      graphType: "RegressaoAr",
   },
   {
      heading: "Temperatura",
      graphType: "RegressaoTemperatura",
   },
   {
      heading: "Solo",
      graphType: "RegressaoSolo",
   },
];

export const dataDefaultValue = {
   hours: {
      statistic: [
         {
            temperature: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            soilMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            airMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            hydrationProbability: 0,
            date: "last 5 hours",
         },
      ],
      infos: [
         {
            _id: "655cb4c84df189fd5dad82c3",
            temperature: 0,
            soilMoisture: 0,
            airMoisture: 0,
            date: "22/10/2023",
            time: "23:00:00",
         },
         {
            _id: "655cb4c84df189fd5dad82c2",
            temperature: 0,
            soilMoisture: 0,
            airMoisture: 0,
            date: "22/10/2023",
            time: "22:00:00",
         },
         {
            _id: "655cb4c84df189fd5dad82c1",
            temperature: 0,
            soilMoisture: 0,
            airMoisture: 0,
            date: "22/10/2023",
            time: "21:00:00",
         },
         {
            _id: "655cb4c84df189fd5dad82c0",
            temperature: 0,
            soilMoisture: 0,
            airMoisture: 0,
            date: "22/10/2023",
            time: "20:00:00",
         },
         {
            _id: "655cb4c84df189fd5dad82bf",
            temperature: 0,
            soilMoisture: 0,
            airMoisture: 0,
            date: "22/10/2023",
            time: "19:00:00",
         },
      ],
      value: {
         temperature: [0, 0, 0, 0, 0],
         soilMoisture: [0, 0, 0, 0, 0],
         airMoisture: [0, 0, 0, 0, 0],
      },
      time: ["23:00", "22:00", "21:00", "20:00", "19:00"],
   },
   days: {
      statistic: [
         {
            temperature: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            soilMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            airMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            hydrationProbability: 0,
            date: "18/11/2023",
         },
         {
            temperature: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            soilMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            airMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            hydrationProbability: 0,
            date: "19/11/2023",
         },
         {
            temperature: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            soilMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            airMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            hydrationProbability: 0,
            date: "20/11/2023",
         },
         {
            temperature: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            soilMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            airMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            hydrationProbability: 0,
            date: "21/11/2023",
         },
         {
            temperature: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            soilMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            airMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            hydrationProbability: 0,
            date: "22/11/2023",
         },
         {
            temperature: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            soilMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            airMoisture: {
               mean: 0,
               mode: [0],
               median: 0,
               standardDeviation: 0,
               skewness: 0,
               kurtosis: 0,
            },
            hydrationProbability: 0,
            date: "all",
         },
      ],
      value: {
         temperature: [0, 0, 0, 0, 0, 0],
         soilMoisture: [0, 0, 0, 0, 0, 0],
         airMoisture: [0, 0, 0, 0, 0, 0],
      },
      dates: ["18/11", "19/11", "20/11", "21/11", "22/11"],
   },
};

export const fetchEquipments = async () => {
   try {
      const response = await http.get("/equipments", {});

      return response.data[0].serialNumber;
   } catch (error) {
      console.log(error);
   }
};

const fetchInfos = async (serialNumber, filter, initDate, lastDate) => {
   try {
      const response = await http.get("/infos", {
         params: {
            filter: filter,
            equipmentSerialNumber: serialNumber,
            initDate: initDate ?? [],
            lastDate: lastDate ?? [],
         },
      });
      return response.data;
   } catch (error) {
      console.log(error);
   }
};

const fetchStatistics = async (serialNumber, filter, dates) => {
   try {
      const response = await http.post(
         "/infos/statistic",
         {
            dates: dates ?? [],
         },
         {
            params: {
               filter: filter,
               equipmentSerialNumber: serialNumber,
            },
         }
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};

// Analytics Cards Data
export const APIData = async () => {
   //variaveis
   const equipment = await fetchEquipments();
   const daysLast5 = getLastDays(4);

   //calcula os dados relacionado a dias
   const daysStatistic = await fetchStatistics(equipment, "day", daysLast5);
   const dates = [];
   const temperature = [];
   const soilMoisture = [];
   const airMoisture = [];

   daysStatistic.map((e) => {
      if (formattedDay(e.date)) {
         dates.push(formattedDay(e.date));
         temperature.push(e.temperature.mean);
         soilMoisture.push(e.soilMoisture.mean);
         airMoisture.push(e.airMoisture.mean);
      }
   });

   const days = {
      statistic: daysStatistic,
      value: {
         temperature,
         soilMoisture,
         airMoisture,
      },
      dates: dates,
   };

   //calcula os dados relacionados a horas

   const hoursInfos = await fetchInfos(equipment, "hours");
   const hoursStatistic = await fetchStatistics(equipment, "hours");

   const hoursTemperature = [];
   const hoursSoilMoisture = [];
   const hoursAirMoisture = [];
   const hoursTime = [];

   hoursInfos.map((e) => {
      hoursTemperature.push(e.temperature);
      hoursSoilMoisture.push(e.soilMoisture);
      hoursAirMoisture.push(e.airMoisture);
      hoursTime.push(formatTime(e.time));
   });

   const hours = {
      infos: hoursInfos,
      statistic: hoursStatistic,
      value: {
         temperature: hoursTemperature,
         soilMoisture: hoursSoilMoisture,
         airMoisture: hoursAirMoisture,
      },
      time: hoursTime,
   };

   const data = {
      hours,
      days,
   };

   return data;
};

export const regressionData = async () => {
   //variaveis
   const equipment = await fetchEquipments();
   const dates = getLastDays(30);
   const initDate = dates[0];
   const finalDate = dates[dates.length - 1];

   const daysRegressao = await fetchInfos(equipment, "day", finalDate, initDate);

   // const daysStatistic = await fetchStatistics(equipment, "day", dates);
   const temperature = [];
   const soilMoisture = [];
   const airMoisture = [];

   daysRegressao.map((e) => {
         temperature.push(parseInt(e.temperature, 10));
         soilMoisture.push(parseInt(e.soilMoisture, 10));
         airMoisture.push(parseInt(e.airMoisture, 10));
   });

   const data = {
      temperature,
      soilMoisture,
      airMoisture,
   };

   return data;
};

export const dispersalData = async (value1, value2) => {
   const equipment = await fetchEquipments();
   const dates = getLastDays(30);
   const initDate = dates[0];
   const finalDate = dates[dates.length - 1];

   const daysDispersao = await fetchInfos(equipment, "day", finalDate, initDate);
   const data = [];

   daysDispersao.map((e) => {
         data.push([
            parseInt(e[value1], 10),
            parseInt(e[value2], 10),
         ]);
   });
   console.log(data);
   return data;
};

//forma um array com os dias para poder passar para API, o 'qtd'eh o quantidade de dias que voce precisa (sempre ira comecar no dia atual).
const getLastDays = (qtd) => {
   const today = new Date();
   const last5Days = [];

   for (let i = qtd; i >= 0; i--) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);

      const formattedDay = `${day.getDate().toString().padStart(2, "0")}/${(
         day.getMonth() + 1
      )
         .toString()
         .padStart(2, "0")}/${day.getFullYear()}`;
      last5Days.push(formattedDay);
   }

   return last5Days;
};

//Formata de DD/MM/AAAA para DD/MM
const formattedDay = (value) => {
   const regexDate = /^\d{2}\/\d{2}\/\d{4}$/;
   if (regexDate.test(value)) {
      const date = value.split("/");
      return `${date[0]}/${date[1]}`;
   }
};

//Formata de HH:MM:SS para HH:MM
const formatTime = (time) => {
   const timeParts = time.split(":");
   const formattedTime = `${timeParts[0]}:${timeParts[1]}`;
   return formattedTime;
};

// export const cardsData = [
//    {
//       title: "Umidade do AR",
//       color: {
//          backGround: "linear-gradient(180deg, #ECEDEF 0%, #ECEDEF 100%)",
//          boxShadow: "0px 10px 20px 0px #A7A7A7",
//       },
//       unidade: 34,
//       medida: "%",
//       //Dia
//       mediaDia: 1,
//       modaDia: 2,
//       medianaDia: 3,
//       curtoseDia: 4,
//       desvioPadraoDia: 5,
//       assimetriaDia: 6,
//       probabilidadeDia: 7,
//       eixoXDia: [
//          {
//             xaxis: {
//                name: "Umidade do AR",
//                categories: ["09-11", "10-11", "11-11", "12-11", "13-11"],
//             },
//          },
//       ],
//       seriesDia: [
//          {
//             name: "Umidade do AR",
//             data: [31, 40, 28, 51, 42],
//          },
//       ],
//       //Hora
//       mediaHora: 8,
//       modaHora: 9,
//       medianaHora: 10,
//       curtoseHora: 11,
//       desvioPadraoHora: 12,
//       assimetriaHora: 13,
//       probabilidadeHora: 14,
//       eixoXHora: [
//          {
//             xaxis: {
//                name: "Umidade do AR",
//                categories: ["17:00", "18:30", "19:30", "20:30", "21:30"],
//             },
//          },
//       ],
//       seriesHora: [
//          {
//             name: "Umidade do AR",
//             data: [45, 77, 22, 6, 48],
//          },
//       ],
//    },
//    {
//       title: "Umidade do Solo",
//       color: {
//          backGround: "linear-gradient(180deg, #ECEDEF 0%, #ECEDEF 100%)",
//          boxShadow: "0px 10px 20px 0px #A7A7A7",
//       },
//       unidade: 25,
//       medida: "%",
//       //Dia
//       mediaDia: 15,
//       modaDia: 16,
//       medianaDia: 17,
//       curtoseDia: 18,
//       desvioPadraoDia: 19,
//       assimetriaDia: 20,
//       probabilidadeDia: 21,
//       eixoXDia: [
//          {
//             xaxis: {
//                name: "Umidade do Solo",
//                categories: ["09-19", "09-19", "09-19", "09-19", "09-19"],
//             },
//          },
//       ],
//       seriesDia: [
//          {
//             name: "Umidade do Solo",
//             data: [22, 57, 2, 78, 48],
//          },
//       ],
//       //Hora
//       mediaHora: 22,
//       modaHora: 23,
//       medianaHora: 24,
//       curtoseHora: 25,
//       desvioPadraoHora: 26,
//       assimetriaHora: 27,
//       probabilidadeHora: 28,
//       eixoXHora: [
//          {
//             xaxis: {
//                name: "Umidade do Solo",
//                categories: ["00:00", "01:30", "02:30", "03:30", "04:30"],
//             },
//          },
//       ],
//       seriesHora: [
//          {
//             name: "Umidade do Solo",
//             data: [45, 77, 22, 6, 48],
//          },
//       ],
//    },
//    {
//       title: "Temperatura",
//       color: {
//          backGround: "linear-gradient(180deg, #ECEDEF 0%, #ECEDEF 100%)",
//          boxShadow: "0px 10px 20px 0px #A7A7A7",
//       },
//       unidade: 15,
//       medida: "°C",
//       //Dia
//       mediaDia: 29,
//       modaDia: 30,
//       medianaDia: 31,
//       curtoseDia: 32,
//       desvioPadraoDia: 33,
//       assimetriaDia: 34,
//       probabilidadeDia: 35,
//       eixoXDia: [
//          {
//             xaxis: {
//                name: "Temperatura",
//                categories: ["09-19", "09-19", "09-19", "09-19", "09-19"],
//             },
//          },
//       ],
//       seriesDia: [
//          {
//             name: "Temperatura",
//             data: [10, 25, 15, 30, 12],
//          },
//       ],
//       //Hora
//       mediaHora: 36,
//       modaHora: 37,
//       medianaHora: 38,
//       curtoseHora: 39,
//       desvioPadraoHora: 40,
//       assimetriaHora: 41,
//       probabilidadeHora: 42,
//       eixoXHora: [
//          {
//             xaxis: {
//                name: "Temperatura",
//                categories: ["00:00", "01:30", "02:30", "03:30", "04:30"],
//             },
//          },
//       ],
//       seriesHora: [
//          {
//             name: "Temperatura",
//             data: [45, 77, 22, 6, 48],
//          },
//       ],
//    },
// ];

// Recent Update Card Data

export const UpdatesData = [
   {
      img: Logo,
      name: "SoloSmart",
      noti: "É hora de regar suas plantas! Verifique o solo para mantê-las saudáveis.",
      time: "15m",
   },
   {
      img: Logo,
      name: "SoloSmart",
      noti: "Análise do solo concluída! Algumas plantas precisam de água extra. Toque para ver a lista e agendar a rega.",
      time: "30m",
   },
   {
      img: Logo,
      name: "SoloSmart",
      noti: "Seu cronograma de rega foi ajustado com base nas condições climáticas. Confira as alterações.",
      time: "45m",
   },
   {
      img: Logo,
      name: "Clima Tempo",
      noti: "Chuva média prevista para novembro: 197 mm em Franca - SP.",
      time: "1h",
   },
   {
      img: Logo,
      name: "G1",
      noti: "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde. À noite o tempo fica aberto.",
      time: "2h",
   },
   {
      img: Logo,
      name: "Uol",
      noti: "Segundo dados do Tempo Agora, a cidade tem previsão de temperaturas entre 22°C e 36°C e 9% de chance de chuvas ao longo desta quarta.",
      time: "3h",
   },
];
