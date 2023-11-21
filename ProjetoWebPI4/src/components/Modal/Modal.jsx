/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./styleModal.module.css";
import http from "../../db/http";

const Modal = ({ closeModal }) => {
   const [nome, setNome] = useState("");
   const [sobrenome, setSobrenome] = useState("");
   const [serial, setSerial] = useState("");

   const handleSave = async () => {
      console.log('chegou no botao')
      try {
        const response = await http.put("/users", {
          name: nome,
         //  lastName: sobrenome,
         //  serialNumber: serial,
        });
  
        console.log("Dados atualizados com sucesso", response.data);
        closeModal(); // Feche o modal após a atualização bem-sucedida
      } catch (error) {
        console.error("Erro ao atualizar dados", error);
      }
    };

   return (
      <div className={style.modalOverlay}>
         <div className={style.modal}>
            <div className={style.modalHeader}>
               <h2>Editar Dados do Perfil</h2>
               <button onClick={closeModal}>&times;</button>
            </div>
            <div className={style.modalContent}>
               <div>
                  <input
                     type="text"
                     placeholder="Nome"
                     value={nome}
                     onChange={(e) => setNome(e.target.value)}
                  />
                  <br />
                  <input
                     type="text"
                     placeholder="Sobrenome"
                     value={sobrenome}
                     onChange={(e) => setSobrenome(e.target.value)}
                  />
                  <br />
                  <input
                     type="text"
                     placeholder="Serial"
                     value={serial}
                     onChange={(e) => setSerial(e.target.value)}
                  />
                  <br />
               </div>
               <button className={style.button} onClick={handleSave}>
            Salvar
          </button>
            </div>
         </div>
      </div>
   );
};

export default Modal;
