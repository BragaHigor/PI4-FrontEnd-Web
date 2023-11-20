/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register/Register";
import Dashboard from "../src/pages/Dashboard/Dashboard";

const RoutesApp = () => {
   const Private = ({ element }) => {
      return localStorage.getItem("token_API") ? element : <Navigate to="/" />;
   };

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route
               exact
               path="/dashboard"
               element={<Private element={<Dashboard />} />}
            />
            <Route exact path="/signup" element={<Register />} />
            <Route path="*" element={<Login />} />
         </Routes>
      </BrowserRouter>
   );
};

export default RoutesApp;
