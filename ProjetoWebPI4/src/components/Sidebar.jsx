/* eslint-disable no-unused-vars */
import { useState } from "react";
import style from "./styleSidebar.module.css";
import { SidebarDispersao, SidebarRegressao } from "../Utils/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useGraphContext, useAuth } from "../contexts/auth";
import {
   UilEstate,
   UilUsersAlt,
} from "@iconscout/react-unicons";
import IconSair from "../assets/sair.png";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal/Modal";
import DispersaoAll from '../components/Graficos/Dispersao/DispersaoAll'

const Sidebar = () => {
   const { setSelectedGraph } = useGraphContext();
   const { logout } = useAuth();
   const navigate = useNavigate();

   const [expanded, setExpaned] = useState(true);
   const [isProfileModalOpen, setProfileModalOpen] = useState(false);
   const [userName, setUserName] = useState("");

   const sidebarVariants = {
      true: {
         left: "0",
      },
      false: {
         left: "-60%",
      },
   };
   console.log(window.innerWidth);

   const handleUpdate = () => {
      navigate("/dashboard");
   };

   const handleLogout = () => {
      logout();
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

   const handleGraphChange = (graphType) => {
      setSelectedGraph(graphType);
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
               <div onClick={handleUpdate}>
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

            <div className={style.logo2} onClick={() => handleGraphChange("DispersaoAll")}>
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
            <Modal
               closeModal={closeProfileModal}
               updateUserName={updateUserName}
            />
         )}
         {setSelectedGraph === 'DispersaoAll' && <DispersaoAll />}
      </>
   );
};

export default Sidebar;
