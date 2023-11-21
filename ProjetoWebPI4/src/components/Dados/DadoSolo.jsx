/* eslint-disable react/prop-types */
import style from "./styleDados.module.css";

const DadoSolo = ({ title, value }) => {
   return (
      <>
         <div className={style.Dados}>
            <div className={style.DadosEstatistica2}>
               <h1>{title}</h1>
               <span>{value}</span>
            </div>
         </div>
      </>
   );
};

export default DadoSolo;
