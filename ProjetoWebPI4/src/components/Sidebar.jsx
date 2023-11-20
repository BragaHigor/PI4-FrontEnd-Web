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
   UilNinja,
} from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
   const { setSelectedGraph } = useGraphContext();
   const { logout } = useAuth();
   const navigate = useNavigate();

   const [expanded, setExpaned] = useState(true);

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
      console.log("Logout")
      // Aqui você executa a função de logout para remover o token
      logout();
      console.log("passo")
      // Depois de remover o token, redirecione para a tela de login
      navigate("/");
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
               <div>
                  <UilClipboardAlt />
                  <span>Grafana</span>
               </div>
               <div>
                  <UilUsersAlt />
                  <span>Perfil</span>
               </div>
               <div onClick={handleLogout}>
                  <UilNinja />
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
      </>
   );
};

export default Sidebar;
