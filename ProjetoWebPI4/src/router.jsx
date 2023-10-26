/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register/Register";

import validateToken from "./db/validateToken";

const RoutesApp = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [isCheckingAuth, setIsCheckingAuth] = useState(true);

   const PrivateRoute = ({ redirectTo, bdUrl, children }) => {
      const token = localStorage.getItem("token_API");

      useEffect(() => {
         const checkAuthentication = async () => {
            try {
               const result = await validateToken(token, bdUrl);
               setIsAuthenticated(result);
            } catch (error) {
               setIsAuthenticated(false);
            } finally {
               setIsCheckingAuth(false);
            }
         };

         checkAuthentication();
      }, [token, bdUrl]);

      if (isCheckingAuth) {
         return alert;
      }

      if (isAuthenticated) {
         return children;
      } else {
         return <Navigate to={redirectTo} />;
      }
   };

   return (
      <BrowserRouter>
         <Routes>
            {/* TELA DASH */}
            <Route
               path="/dashboard"
               element={
                  <PrivateRoute redirectTo={"/"} bdUrl={"/dashboard"}>
                     {/* <Admin /> */}
                  </PrivateRoute>
               }
            />

            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Register />} />
         </Routes>
      </BrowserRouter>
   );
};

export default RoutesApp;
