/* eslint-disable react/prop-types */
import style from "./styleDados.module.css";

const Dados = ({ title, value, title2, value2 }) => {
   return (
      <>
         <div className={style.Dados}>
            <div className={style.DadosEstatistica}>
               <h1>{title}</h1>
               <span>{value}</span>
            </div>
            <div className={style.DadosEstatistica}>
               <h1>{title2}</h1>
               <span>{value2}</span>
            </div>
         </div>
      </>
   );
};

export default Dados;
