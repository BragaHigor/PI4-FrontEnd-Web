//CSS
import style from "./styleLogin.module.css";

//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//hooks
import { useState } from "react";

//components
import Button from "../../components/ButtonLoginRegister/Button";
import Input from "../../components/Input/Input";

//img
import Background from "../../assets/leaves.jpg";

//router
import { Link, useNavigate } from "react-router-dom";

// axios
import http from "../../db/http";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   //API
   const signinSubmit = async () => {
      try {
         const response = await http.post("/users/auth", {
            email,
            password,
         });
         const token = response.data.token;

         console.log("Token", token);
         console.log(response);

         localStorage.clear("token_API");

         localStorage.setItem("token_API", JSON.stringify(response.data.token));

         navigate("/dashboard");
      } catch (error) {
         // if (error.response) {
         //    if (error.response.data.error === "Senha incorreta.") {
         //       toast.error(
         //          "Senha incorreta. Por favor, verifique a Senha digitada.",
         //          {
         //             className: "error-toast",
         //             position: "bottom-right",
         //             autoClose: 5000,
         //             hideProgressBar: false,
         //             closeOnClick: true,
         //             pauseOnHover: true,
         //             draggable: true,
         //             progress: undefined,
         //             theme: "colored",
         //          }
         //       );
         //    } else if (error.response.data.error === "Email não encontrado.") {
         //       toast.error(
         //          "Email não encontrado. Por favor, verifique o Email digitado.",
         //          {
         //             className: "error-toast",
         //             position: "bottom-right",
         //             autoClose: 5000,
         //             hideProgressBar: false,
         //             closeOnClick: true,
         //             pauseOnHover: true,
         //             draggable: true,
         //             progress: undefined,
         //             theme: "colored",
         //          }
         //       );
         //    } else {
         //       toast.info("Erro de conexão. Entre contato com o suporte.", {
         //          className: "error-toast",
         //          position: "bottom-left",
         //          autoClose: 5000,
         //          hideProgressBar: false,
         //          closeOnClick: true,
         //          pauseOnHover: true,
         //          draggable: true,
         //          progress: undefined,
         //          theme: "colored",
         //       });
         //    }
         // }

         console.log("ERROR", error);
      }
   };

   const handleSignin = (e) => {
      e.preventDefault();

      if (!email | !password) {
         return toast.warn("Preencha todos os campos", {
            className: "error-toast",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         });
      } else {
         signinSubmit();
      }
   };

   return (
      <>
         <ToastContainer />
         <div className={style.pageLogin}>
            <img className={style.animacao} src={Background} alt="" />
            <form className={style.login} onSubmit={handleSignin}>
               <div className={style.cabecalho}>
                  <label className={style.labelTitulo}>Solo Smart,</label>
                  <label className={style.labelText}>Seja Bem-Vindo</label>
               </div>
               <div className={style.form}>
                  <Input
                     type="email"
                     placeholder="E-mail"
                     value={email}
                     onChange={(e) => [setEmail(e.target.value)]}
                  />
                  <Input
                     type="password"
                     placeholder="Senha"
                     value={password}
                     onChange={(e) => [setPassword(e.target.value)]}
                  />
                  <label className={style.labelError}></label>
                  <Button Text="Entrar" onClick={handleSignin} />
                  <label className={style.label}>Não tem conta?</label>
                  <Link to="/signup" className={style.link}>
                     &nbsp;Cadastre-se
                  </Link>
               </div>
            </form>
         </div>
      </>
   );
};

export default Login;
