import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import style from "./styleMainDash.module.css";
import RegressaoDispersao from "../RegressaoDispersao/RegressaoDispersao";
import http from "../../db/http";
import { fetchEquipments } from "../../Utils/Data";

const MainDash = () => {
   const [nomeCliente, setNomeCliente] = useState("");
   const [equipamento, setEquipamento] = useState();

   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const token = await localStorage.getItem("token_API");

            if (token) {
               const response = await http.get("/users");

               const data = response.data;
               setNomeCliente(data[0].name);
            }
         } catch (error) {
            console.error("Erro ao obter os dados do cliente:", error);
            console.error(
               "Erro ao obter os dados do cliente:",
               error.response ? error.response.data : error.message
            );
         }
      };

      fetchUsers();
      fetchEquipments().then((res) => {
         setEquipamento(res)
      });
   }, []);

   return (
      <div className={style.MainDash}>
         <div className={style.Title}>
            <h1>Bem Vindo: {nomeCliente}</h1>
            <h1>Serial Number: {equipamento}</h1>
         </div>
         <Cards />
         <div className={style.Table}>
            <RegressaoDispersao />
         </div>
      </div>
   );
};

export default MainDash;
