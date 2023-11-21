/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import style from "./styleModal.module.css";
import http from "../../db/http";

const Modal = ({ closeModal, updateUserName }) => {
   const [nome, setNome] = useState("");
   const [email, setEmail] = useState("");
   const [clickButton, setClickButton] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         console.log("chegou no botao");
         try {
            const response = await http.put("/users", {
               user: { name: `${nome}`, email: email },
            });

            console.log("Dados atualizados com sucesso", response.data);
            // Atualize o nome do usuário na tela usando a função passada como prop
            updateUserName(nome);
            closeModal(); // Feche o modal após a atualização bem-sucedida
            window.location.reload(false);
         } catch (error) {
            console.error("Erro ao atualizar dados", error);
         }

         setClickButton(false);
      };

      if (clickButton) {
         fetchData(); // Chame a função fetchData se clickButton for verdadeiro
      }
   }, [clickButton, closeModal, nome, email, updateUserName]);

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
                  <div>
                     <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <br />
                  </div>
               </div>
               <button
                  className={style.button}
                  onClick={() => setClickButton(true)}
               >
                  Salvar
               </button>
            </div>
         </div>
      </div>
   );
};

export default Modal;
