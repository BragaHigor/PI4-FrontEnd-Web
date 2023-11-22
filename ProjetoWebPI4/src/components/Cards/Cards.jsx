import style from "./styleCards.module.css";
import { dataDefaultValue } from "../../Utils/Data";

import Card from "../Card/Card";
import { useEffect, useState } from "react";

import { APIData } from "../../Utils/Data";

const Cards = () => {
   const [data, setData] = useState(dataDefaultValue);
   const [cards, setCards] = useState([]);

   useEffect(() => {
      APIData().then((res) => {
         setData(res);
         setCards([
            { title: "Umidade do Ar", value: "airMoisture" },
            { title: "Umidade do Solo", value: "soilMoisture" },
            { title: "Temperatura", value: "temperature" },
         ]);
      });

      console.log("CONSOLE LOG", data.hours.statistic[0].hydrationProbability);
   }, []);

   return (
      <div className={style.Cards}>
         {cards.map((card, id) => {
            return (
               <div className={style.parentContainer} key={id}>
                  <Card
                     title={card.title}
                     color={{
                        backGround:
                           "linear-gradient(180deg, #ECEDEF 0%, #ECEDEF 100%)",
                        boxShadow: "0px 10px 20px 0px #A7A7A7",
                     }}
                     unidade={data.hours.infos[0]?.[card.value]}
                     medida={card.value != "temperature" ? "%" : "°C"}

                     seriesDia={[{
                        name: card.title,
                        data: data.days.value?.[card.value],
                     }]}
                     seriesHora={[{
                        name: card.title,
                        data: data.hours.value?.[card.value],
                     }]}

                     eixoXDia={[{
                        xaxis: { name: card.title, categories: data.days.dates },
                     }]}
                     eixoXHora={[{
                        xaxis: { name: card.title, categories: data.hours.time },
                     }]}

                     mediaHora={data.hours.statistic[0]?.[card.value].mean}
                     modaHora={data.hours.statistic[0]?.[card.value].mode}
                     medianaHora={data.hours.statistic[0]?.[card.value].median}
                     curtoseHora={data.hours.statistic[0]?.[card.value].kurtosis}
                     desvioPadraoHora={ data.hours.statistic[0]?.[card.value].standardDeviation}
                     assimetriaHora={data.hours.statistic[0]?.[card.value].skewness}
                     probabilidadeHora={data.hours.statistic[0].hydrationProbability || 0}

                     mediaDia={data.days.statistic[5]?.[card.value].mean}
                     modaDia={data.days.statistic[5]?.[card.value].mode}
                     medianaDia={data.days.statistic[5]?.[card.value].median}
                     curtoseDia={data.days.statistic[5]?.[card.value].kurtosis}
                     desvioPadraoDia={data.days.statistic[5]?.[card.value].standardDeviation}
                     assimetriaDia={ data.days.statistic[5]?.[card.value].skewness }
                     probabilidadeDia={data.days.statistic[5].hydrationProbability || 0}
                  />
               </div>
            );
         })}
      </div>
   );
};

export default Cards;
