import style from './styleCards.module.css';
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
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;