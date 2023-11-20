/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const GraphContext = createContext();

export const GraphProvider = ({ children }) => {
  const [selectedGraph, setSelectedGraph] = useState("DispersaoArSolo");

  const value = {
    selectedGraph,
    setSelectedGraph,
  };

  return <GraphContext.Provider value={value}>{children}</GraphContext.Provider>;
};

export const useGraphContext = () => {
  const context = useContext(GraphContext);
  if (!context) {
    throw new Error("useGraphContext must be used within a GraphProvider");
  }
  return context;
};

// Seu código existente para o AuthProvider
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState();

   // API
   const logout = () => {
      setUser(null);

      localStorage.removeItem("token_API");
   };

   const value = {
      user,
      logout,
   };

   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   );
};