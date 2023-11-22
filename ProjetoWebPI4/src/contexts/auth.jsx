/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const GraphContext = createContext();

export const GraphProvider = ({ children }) => {
   const [selectedGraph, setSelectedGraph] = useState("DispersaoAll");

   const value = {
      selectedGraph,
      setSelectedGraph,
   };

   return (
      <GraphContext.Provider value={value}>{children}</GraphContext.Provider>
   );
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
   const [user, setUser] = useState(null);
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   // Função para realizar o logout
   const logout = () => {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem("token_API");
   };

   // Função para realizar o login
   const login = (userData, token) => {
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem("token_API", token);
   };

   const value = {
      user,
      isAuthenticated,
      login,
      logout,
   };

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
   const context = useContext(AuthContext);
   if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
   }
   return context;
};
