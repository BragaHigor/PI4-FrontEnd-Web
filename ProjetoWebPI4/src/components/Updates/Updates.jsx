/* eslint-disable react/jsx-key */
import style from "./styleUpdate.module.css";
import { UpdatesData } from "../../Utils/Data";

const Updates = () => {
   return (
      <div className={style.Updates}>
         {UpdatesData.map((update) => {
            return (
               <div className={style.update}>
                  <img src={update.img} alt="profile" />
                  <div className={style.noti}>
                     <div style={{ marginBottom: "0.5rem" }}>
                        <span>{update.name}</span>
                        <span> {update.noti}</span>
                     </div>
                     <span>{update.time}</span>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Updates;
