import RoutesApp from "./router";
import { AuthProvider, GraphProvider } from "./contexts/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
   return (
      <AuthProvider>
         <GraphProvider>
            <ToastContainer autoClose={3333} />
            <RoutesApp />
         </GraphProvider>
      </AuthProvider>
   );
}

export default App;
