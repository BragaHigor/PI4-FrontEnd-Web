/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./styleCard.module.css";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import Grafico from "../Graficos/Grafico";
import Dados from "../Dados/Dados";

// parent Card
const Card = (props) => {
   const [expanded, setExpanded] = useState(false);
   const [selectedOption, setSelectedOption] = useState("Dia");

   const handleOptionChange = (option) => {
      setSelectedOption(option);
   };

   return (
      <AnimateSharedLayout>
         {expanded ? (
            <>
               {selectedOption === "Dia" ? (
                  <ExpandedCardDia
                     param={props}
                     setExpanded={() => setExpanded(false)}
                     handleOptionChange={handleOptionChange}
                  />
               ) : null}
               {selectedOption === "Hora" ? (
                  <ExpandedCardHora
                     param={props}
                     setExpanded={() => setExpanded(false)}
                     handleOptionChange={handleOptionChange}
                  />
               ) : null}
            </>
         ) : (
            <CompactCard
               param={props}
               setExpanded={() => setExpanded(true)}
               handleOptionChange={handleOptionChange}
            />
         )}
      </AnimateSharedLayout>
   );
};

// Compact Card
function CompactCard({ param, setExpanded, handleOptionChange }) {
   const arrayDados = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 90)
   );
   return (
      <motion.div
         className={style.CompactCard}
         style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
         }}
         layoutId="expandableCard"
         onClick={setExpanded}
      >
         <div className={style.radialBar}>
            <div className={style.info}>
               <h1 className={style.unidade}>{param.unidade}</h1>
               <span className={style.medida}>{param.medida}</span>
            </div>
            <span>{param.title}</span>
         </div>
         <div className={style.detail}>
            <div className={style.DiaHora}>
               <span
                  className={style.Dia}
                  onClick={() => handleOptionChange("Dia")}
               >
                  Dia
               </span>
               <span
                  className={style.Hora}
                  onClick={() => handleOptionChange("Hora")}
               >
                  Hora
               </span>
            </div>
            <Grafico data={arrayDados} />
         </div>
      </motion.div>
   );
}

// Expanded Card
function ExpandedCardDia({ param, setExpanded }) {
   
   const data = {
      options: {
         chart: {
            type: "area",
            height: "auto",
            zoom: {
               enabled: false,
            },
         },

         dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#292934",
            opacity: 0.35,
         },

         fill: {
            colors: ["#ECEDEF"],
            type: "gradient",
         },
         dataLabels: {
            enabled: false,
         },
         stroke: {
            curve: "smooth",
            colors: ["#006A42"],
         },
         tooltip: {
            x: {
               format: "dd/MM",
            },
         },
         grid: {
            show: true,
         },
         xaxis: {
            type: "date",
            categories: param.eixoXDia[0].xaxis.categories, // Use os dados do eixo X correspondentes
         },
      },
   };

   return (
      <>
         <motion.div
            className={style.ExpandedCard}
            style={{
               background: param.color.backGround,
               boxShadow: param.color.boxShadow,
            }}
            layoutId="expandableCard"
         >
            <div
               style={{
                  alignSelf: "flex-end",
                  cursor: "pointer",
                  color: "#292934",
               }}
            >
               <UilTimes onClick={setExpanded} />
            </div>
            <span>{param.title}</span>
            <div className={style.Opcao}>
               <span>dos últimos 5 dias</span>
            </div>
            <div className={style.chartContainer}>
               <div className={style.chartGrafico}>
                  <Chart
                     options={data.options}
                     series={param.seriesHora}
                     type="area"
                     height={400}
                     width={600}
                  />
               </div>
               <div className={style.Dados}>
                  <Dados
                     title="Média"
                     value={300}
                     title2="Modal/Mediana"
                     value2={100}
                  />
                  <Dados
                     title="Desvio Padrão"
                     value={1.8}
                     title2="Assimetria"
                     value2={25}
                  />
                  <Dados
                     title="Curtose"
                     value={70}
                     title2="Probabilidade"
                     value2={80}
                  />
                  <Dados
                     title="Regressão"
                     value={15}
                     title2="Inferência estatística"
                     value2={80}
                  />
               </div>
            </div>
         </motion.div>
      </>
   );
}

// Expanded Card
function ExpandedCardHora({ param, setExpanded }) {
   const data = {
      options: {
         chart: {
            type: "area",
            height: "auto",
            zoom: {
               enabled: false,
            },
         },

         dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#292934",
            opacity: 0.35,
         },

         fill: {
            colors: ["#ECEDEF"],
            type: "gradient",
         },
         dataLabels: {
            enabled: false,
         },
         stroke: {
            curve: "smooth",
            colors: ["#006A42"],
         },
         tooltip: {
            x: {
               format: "HH:mm",
            },
         },
         grid: {
            show: true,
         },
         xaxis: {
            type: "time",
            categories: param.eixoXHora[0].xaxis.categories, // Use os dados do eixo X correspondentes
         },
      },
   };

   return (
      <>
         <motion.div
            className={style.ExpandedCard}
            style={{
               background: param.color.backGround,
               boxShadow: param.color.boxShadow,
            }}
            layoutId="expandableCard"
         >
            <div
               style={{
                  alignSelf: "flex-end",
                  cursor: "pointer",
                  color: "#292934",
               }}
            >
               <UilTimes onClick={setExpanded} />
            </div>
            <span>{param.title}</span>
            <div className={style.Opcao}>
               <span>das últimas 5 horas</span>
            </div>
            <div className={style.chartContainer}>
               <div className={style.chartGrafico}>
                  <Chart
                     options={data.options}
                     series={param.seriesDia}
                     type="area"
                     height={400}
                     width={600}
                  />
               </div>
               <div className={style.Dados}>
                  <Dados
                     title="Média"
                     value={400}
                     title2="Modal/Mediana"
                     value2={100}
                  />
                  <Dados
                     title="Desvio Padrão"
                     value={1.8}
                     title2="Assimetria"
                     value2={25}
                  />
                  <Dados
                     title="Curtose"
                     value={1000}
                     title2="Probabilidade"
                     value2={80}
                  />
                  <Dados
                     title="Regressão"
                     value={15}
                     title2="Inferência estatística"
                     value2={80}
                  />
               </div>
            </div>
         </motion.div>
      </>
   );
}

export default Card;
