import Logo from "../assets/icon.png";

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
export const cardsData = [
   {
      title: "Umidade do AR",
      color: {
         backGround: "linear-gradient(180deg, #ECEDEF 0%, #ECEDEF 100%)",
         boxShadow: "0px 10px 20px 0px #A7A7A7",
      },
      barValue: 40,
      value: "0000",
      unidade: 34,
      medida: "%",
      seriesDia: [
         {
            name: "Umidade do AR",
            data: [31, 40, 28, 51, 42, 109, 100],
         },
      ],
      seriesHora: [
         {
            name: "Umidade do AR",
            data: [45, 77, 22, 6, 48, 15, 30],
         },
      ],
   },
   {
      title: "Umidade do Solo",
      color: {
         backGround: "linear-gradient(180deg, #ECEDEF 0%, #ECEDEF 100%)",
         boxShadow: "0px 10px 20px 0px #A7A7A7",
      },
      barValue: 80,
      value: "14,270",
      unidade: 25,
      medida: "%",
      seriesDia: [
         {
            name: "Umidade do Solo",
            data: [22, 57, 2, 78, 48, 33, 16],
         },
      ],
      seriesHora: [
         {
            name: "Umidade do AR",
            data: [45, 77, 22, 6, 48, 15, 30],
         },
      ],
   },
   {
      title: "Temperatura",
      color: {
         backGround: "linear-gradient(180deg, #ECEDEF 0%, #ECEDEF 100%)",
         boxShadow: "0px 10px 20px 0px #A7A7A7",
      },
      barValue: 60,
      value: "4,270",
      unidade: 15,
      medida: "°C",
      seriesDia: [
         {
            name: "Temperatura",
            data: [10, 25, 15, 30, 12, 15, 20],
         },
      ],
      seriesHora: [
         {
            name: "Umidade do AR",
            data: [45, 77, 22, 6, 48, 15, 30],
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
