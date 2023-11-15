// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
  } from "@iconscout/react-unicons";
  
  
  // Recent Card Imports
  import Logo from "../assets/icon.png";
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Grafana",
    },
    {
      icon: UilUsersAlt,
      heading: "Perfil",
    },
    // {
    //   icon: UilPackage,
    //   heading: 'Products'
    // },
    // {
    //   icon: UilChart,
    //   heading: 'Analytics'
    // },
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
      medida: '%',
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
      medida: '%',
      seriesDia: [
        {
          name: "Umidade do Solo",
          data: [22, 57, 2, 78, 48, 33, 16]
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
      medida: '°C',
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
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: Logo,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: Logo,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];