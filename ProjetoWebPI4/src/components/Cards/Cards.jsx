import style from "./styleCards.module.css";
import { cardsData } from "../../Utils/Data";

import Card from "../Card/Card";

const Cards = () => {
   return (
      <div className={style.Cards}>
         {cardsData.map((card, id) => {
            return (
               <div className={style.parentContainer} key={id}>
                  <Card
                     title={card.title}
                     color={card.color}
                     png={card.png}
                     unidade={card.unidade}
                     medida={card.medida}

                     seriesDia={card.seriesDia}
                     seriesHora={card.seriesHora}
                     eixoXDia={card.eixoXDia}
                     eixoXHora={card.eixoXHora}

                     mediaHora={card.mediaHora}
                     modaHora={card.modaHora}
                     medianaHora={card.medianaHora}
                     curtoseHora={card.curtoseHora}
                     desvioPadraoHora={card.desvioPadraoHora}
                     assimetriaHora={card.assimetriaHora}
                     probabilidadeHora={card.probabilidadeHora}

                     mediaDia={card.mediaDia}
                     modaDia={card.modaDia}
                     medianaDia={card.medianaDia}
                     curtoseDia={card.curtoseDia}
                     desvioPadraoDia={card.desvioPadraoDia}
                     assimetriaDia={card.assimetriaDia}
                     probabilidadeDia={card.probabilidadeDia}
                  />
               </div>
            );
         })}
      </div>
   );
};

export default Cards;
