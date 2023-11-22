import Logo from "../assets/icon.png";
import { useState, useEffect } from "react";
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
      heading: "Solo x Ar",
      graphType: "RegressaoArSolo",
   },
   {
      heading: "Ar x Temperatura",
      graphType: "RegressaoArTemperatura",
   },
   {
      heading: "Temperatura x Solo",

      graphType: "RegressaoTemperaturaSolo",
   },
];

// Analytics Cards Data
export const APIData = () => {
   //EQUIPAMENTO
   const [serialNumber, setSerialNumber] = useState("");

   //DIAS
   const [mean, setMean] = useState("");
   const [mode, setMode] = useState("");
   const [median, setMedian] = useState("");
   const [standardDeviation, setStandardDeviation] = useState("");
   const [skewness, setSkewness] = useState("");
   const [kurtosis, setKurtosis] = useState("");
   const [hydrationProbabilityDay, setHydrationProbability] = useState("");

   //HORAS
   const [meanHour, setMeanHour] = useState("");
   const [modeHour, setModeHour] = useState("");
   const [medianHour, setMedianHour] = useState("");
   const [standardDeviationHour, setStandardDeviationHour] = useState("");
   const [skewnessHour, setSkewnessHour] = useState("");
   const [kurtosisHour, setKurtosisHour] = useState("");
   const [hydrationProbabilityHour, setHydrationProbabilityHour] = useState("");

   //CHAMADA EQUIPAMENTO
   useEffect(() => {
      const fetchEquipments = async () => {
         try {
            const response = await http.get("/equipments", {});
            return setSerialNumber(response.data[0].serialNumber);
         } catch (error) {
            console.log(error);
         }
      };

      fetchEquipments();
   }, []);

   useEffect(() => {
      //LOGICA PARA TRATAR DIAS
      const obterUltimos5DiasFormatados = () => {
         const hoje = new Date();
         const ultimos5Dias = [];

         for (let i = 4; i >= 0; i--) {
            const dia = new Date(hoje);
            dia.setDate(hoje.getDate() - i);

            const diaFormatado = `${dia
               .getDate()
               .toString()
               .padStart(2, "0")}/${(dia.getMonth() + 1)
               .toString()
               .padStart(2, "0")}/${dia.getFullYear()}`;
            ultimos5Dias.push(diaFormatado);
         }

         return ultimos5Dias;
      };

      //CHAMADAS DOS DADOS
      const arrayDates = obterUltimos5DiasFormatados();

      const horaDados = async () => {
         try {
            const response = await http.get("/infos", {
               params: {
                  filter: "hours",
                  equipmentSerialNumber: serialNumber,
               },
            });
            console.log("DADOS", response);
            setMeanHour(response.data[0].time)
            return response;
         } catch (error) {
            console.log(error);
         }
      };
      horaDados();
   }, [serialNumber, setSerialNumber]);

   return null;
};

export const cardsData = [
   {
      title: "Umidade do AR",
      color: {
         backGround: "linear-gradient(180deg, #ECEDEF 0%, #ECEDEF 100%)",
         boxShadow: "0px 10px 20px 0px #A7A7A7",
      },
      unidade: 34,
      medida: "%",
      //Dia
      mediaDia: 1,
      modaDia: 2,
      medianaDia: 3,
      curtoseDia: 4,
      desvioPadraoDia: 5,
      assimetriaDia: 6,
      probabilidadeDia: 7,
      eixoXDia: [
         {
            xaxis: {
               name: "Umidade do AR",
               categories: ["09-11", "10-11", "11-11", "12-11", "13-11"],
            },
         },
      ],
      seriesDia: [
         {
            name: "Umidade do AR",
            data: [31, 40, 28, 51, 42],
         },
      ],
      //Hora
      mediaHora: 8,
      modaHora: 9,
      medianaHora: 10,
      curtoseHora: 11,
      desvioPadraoHora: 12,
      assimetriaHora: 13,
      probabilidadeHora: 14,
      eixoXHora: [
         {
            xaxis: {
               name: "Umidade do AR",
               categories: [(meanHour, )],
            },
         },
      ],
      seriesHora: [
         {
            name: "Umidade do AR",
            data: [45, 77, 22, 6, 48],
         },
      ],
   },
   {
      title: "Umidade do Solo",
      color: {
         backGround: "linear-gradient(180deg, #ECEDEF 0%, #ECEDEF 100%)",
         boxShadow: "0px 10px 20px 0px #A7A7A7",
      },
      unidade: 25,
      medida: "%",
      //Dia
      mediaDia: 15,
      modaDia: 16,
      medianaDia: 17,
      curtoseDia: 18,
      desvioPadraoDia: 19,
      assimetriaDia: 20,
      probabilidadeDia: 21,
      eixoXDia: [
         {
            xaxis: {
               name: "Umidade do Solo",
               categories: ["09-19", "09-19", "09-19", "09-19", "09-19"],
            },
         },
      ],
      seriesDia: [
         {
            name: "Umidade do Solo",
            data: [22, 57, 2, 78, 48],
         },
      ],
      //Hora
      mediaHora: 22,
      modaHora: 23,
      medianaHora: 24,
      curtoseHora: 25,
      desvioPadraoHora: 26,
      assimetriaHora: 27,
      probabilidadeHora: 28,
      eixoXHora: [
         {
            xaxis: {
               name: "Umidade do Solo",
               categories: ["00:00", "01:30", "02:30", "03:30", "04:30"],
            },
         },
      ],
      seriesHora: [
         {
            name: "Umidade do Solo",
            data: [45, 77, 22, 6, 48],
         },
      ],
   },
   {
      title: "Temperatura",
      color: {
         backGround: "linear-gradient(180deg, #ECEDEF 0%, #ECEDEF 100%)",
         boxShadow: "0px 10px 20px 0px #A7A7A7",
      },
      unidade: 15,
      medida: "°C",
      //Dia
      mediaDia: 29,
      modaDia: 30,
      medianaDia: 31,
      curtoseDia: 32,
      desvioPadraoDia: 33,
      assimetriaDia: 34,
      probabilidadeDia: 35,
      eixoXDia: [
         {
            xaxis: {
               name: "Temperatura",
               categories: ["09-19", "09-19", "09-19", "09-19", "09-19"],
            },
         },
      ],
      seriesDia: [
         {
            name: "Temperatura",
            data: [10, 25, 15, 30, 12],
         },
      ],
      //Hora
      mediaHora: 36,
      modaHora: 37,
      medianaHora: 38,
      curtoseHora: 39,
      desvioPadraoHora: 40,
      assimetriaHora: 41,
      probabilidadeHora: 42,
      eixoXHora: [
         {
            xaxis: {
               name: "Temperatura",
               categories: ["00:00", "01:30", "02:30", "03:30", "04:30"],
            },
         },
      ],
      seriesHora: [
         {
            name: "Temperatura",
            data: [45, 77, 22, 6, 48],
         },
      ],
   },
];

// Recent Update Card Data
export const UpdatesData = [
   {
      img: Logo,
      name: "Clima Tempo:",
      noti: "Para o mês de novembro, a chuva média é de 197 mm na cidade Franca - SP.",
      time: "25s",
   },
   {
      img: Logo,
      name: "G1:",
      noti: "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde. À noite o tempo fica aberto.",
      time: "30m",
   },
   {
      img: Logo,
      name: "Uol:",
      noti: "Segundo dados do Tempo Agora, a cidade tem previsão de temperaturas entre 22°C e 36°C e 9% de chance de chuvas ao longo desta quarta.",
      time: "2h",
   },
   {
      img: Logo,
      name: "Clima Tempo:",
      noti: "Para o mês de novembro, a chuva média é de 197 mm na cidade Franca - SP.",
      time: "25s",
   },
   {
      img: Logo,
      name: "G1:",
      noti: "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde. À noite o tempo fica aberto.",
      time: "30m",
   },
   {
      img: Logo,
      name: "Uol:",
      noti: "Segundo dados do Tempo Agora, a cidade tem previsão de temperaturas entre 22°C e 36°C e 9% de chance de chuvas ao longo desta quarta.",
      time: "2h",
   },
];
