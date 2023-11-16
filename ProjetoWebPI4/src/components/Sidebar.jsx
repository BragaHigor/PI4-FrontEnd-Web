import { useState } from "react";
import style from "./styleSidebar.module.css";
import { SidebarData, SidebarDispersao, SidebarRegressao } from "../Utils/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useGraphContext } from "../contexts/auth";

const Sidebar = () => {
   const [selected, setSelected] = useState(0);
   const { setSelectedGraph } = useGraphContext();

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
               {SidebarData.map((item, index) => {
                  return (
                     <div
                        className={
                           selected === index ? "menuItem active" : "menuItem"
                        }
                        key={index}
                        onClick={() => setSelected(index)}
                     >
                        <item.icon />
                        <span>{item.heading}</span>
                     </div>
                  );
               })}
            </div>

            <div className={style.logo2}>
               <h1>Dispersão</h1>
            </div>
            <div className={style.menu2}>
               {SidebarDispersao.map((item, index) => (
                  <div
                     className={
                        selected === index ? "menuItem active" : "menuItem"
                     }
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
                     className={
                        selected === index ? "menuItem active" : "menuItem"
                     }
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
