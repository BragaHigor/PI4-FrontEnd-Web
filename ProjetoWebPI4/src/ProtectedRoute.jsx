/* eslint-disable react/prop-types */
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
   const isAuthenticated = !!localStorage.getItem("token_API");
   const navigate = useNavigate();

   if (!isAuthenticated) {
      navigate("/login", {
         replace: true,
         state: { from: rest.location.pathname },
      });
      return null;
   }

   return <Route {...rest} element={<Element />} />;
};

export default ProtectedRoute;
