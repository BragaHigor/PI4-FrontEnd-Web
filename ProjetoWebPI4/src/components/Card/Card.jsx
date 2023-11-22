/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import style from "./styleCard.module.css";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import Grafico from "../Graficos/Grafico";
import Dados from "../Dados/Dados";
import DadoSolo from "../Dados/DadoSolo";
import { APIData } from "../../Utils/Data";

// parent Card
const Card = (props) => {

   APIData()

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
            categories: param.eixoXDia[0].xaxis.categories,
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
                     value={param.mediaDia} 
                     title2="Moda" 
                     value2={param.modaDia} 
                  />
                  <Dados
                     title="Mediana"
                     value={param.medianaDia}
                     title2="Curtose"
                     value2={param.curtoseDia}
                  />
                  <Dados
                     title="Desvio Padrão"
                     value={param.desvioPadraoDia}
                     title2="Assimetria"
                     value2={param.assimetriaDia}
                  />
                  <DadoSolo
                     title="Probabilidade da Planta Desidratar"
                     value={param.probabilidadeDia}
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
            categories: param.eixoXHora[0].xaxis.categories,
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
                     value={param.mediaHora} 
                     title2="Moda" 
                     value2={param.modaHora} 
                  />
                  <Dados
                     title="Mediana"
                     value={param.medianaHora}
                     title2="Curtose"
                     value2={param.curtoseHora}
                  />
                  <Dados
                     title="Desvio Padrão"
                     value={param.desvioPadraoHora}
                     title2="Assimetria"
                     value2={param.assimetriaHora}
                  />
                  <DadoSolo
                     title="Probabilidade da Planta Desidratar"
                     value={param.probabilidadeHora}
                  />
               </div>
            </div>
         </motion.div>
      </>
   );
}

export default Card;
