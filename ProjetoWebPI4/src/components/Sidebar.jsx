/* eslint-disable no-unused-vars */
import { useState } from "react";
import style from "./styleSidebar.module.css";
import { SidebarDispersao, SidebarRegressao } from "../Utils/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useGraphContext, useAuth } from "../contexts/auth";
import {
   UilEstate,
   UilClipboardAlt,
   UilUsersAlt,
} from "@iconscout/react-unicons";
import IconSair from "../assets/sair.png";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal/Modal";

const Sidebar = () => {
   const { setSelectedGraph } = useGraphContext();
   const { logout } = useAuth();
   const navigate = useNavigate();

   const [expanded, setExpaned] = useState(true);
   const [isProfileModalOpen, setProfileModalOpen] = useState(false);
   const [userName, setUserName] = useState("")

   const sidebarVariants = {
      true: {
         left: "0",
      },
      false: {
         left: "-60%",
      },
   };
   console.log(window.innerWidth);

   const handleLogout = () => {
      console.log("Logout");
      // Aqui você executa a função de logout para remover o token
      logout();
      console.log("passo");
      // Depois de remover o token, redirecione para a tela de login
      navigate("/");
   };

   const openProfileModal = () => {
      setProfileModalOpen(true);
   };

   const closeProfileModal = () => {
      setProfileModalOpen(false);
   };

   const updateUserName = (newName) => {
      setUserName(newName);
   };

   return (
      <>
         <div
            className={style.bars}
            style={expanded ? { left: "60%" } : { left: "5%" }}
            onClick={() => setExpaned(!expanded)}
         >
            <UilBars />
         </div>
         <motion.div
            className={style.sidebar}
            variants={sidebarVariants}
            animate={window.innerWidth <= 768 ? `${expanded}` : ""}
         >
            <div className={style.logo}>
               <h1>SoloSmart</h1>
            </div>

            <div className={style.menu}>
               <div>
                  <UilEstate />
                  <span>Dashboard</span>
               </div>
               <div onClick={openProfileModal}>
                  <UilUsersAlt />
                  <span>Perfil</span>
               </div>
               <div onClick={handleLogout}>
                  <img src={IconSair} alt="" width={25} />
                  <span>Sair</span>
               </div>
            </div>

            <div className={style.logo2}>
               <h1>Dispersão</h1>
            </div>
            <div className={style.menu2}>
               {SidebarDispersao.map((item, index) => (
                  <div
                     className={style.menuTitle}
                     key={index}
                     onClick={() => setSelectedGraph(item.graphType)}
                  >
                     <span className={style.menuTitle}>{item.heading}</span>
                  </div>
               ))}
            </div>

            <div className={style.logo3}>
               <h1>Regressão</h1>
            </div>
            <div className={style.menu2}>
               {SidebarRegressao.map((item, index) => (
                  <div
                     className={style.menuTitle2}
                     key={index}
                     onClick={() => setSelectedGraph(item.graphType)}
                  >
                     <span className={style.menuTitle}>{item.heading}</span>
                  </div>
               ))}
            </div>
         </motion.div>
         {isProfileModalOpen && (
             <Modal closeModal={closeProfileModal} updateUserName={updateUserName} />
         )}
      </>
   );
};

export default Sidebar;
