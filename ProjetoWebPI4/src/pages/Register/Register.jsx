//CSS
import style from "./styleRegister.module.css";

//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//react
import { useState } from "react";

//router
import { Link, useNavigate } from "react-router-dom";

//img
import Background from "../../assets/leaves.jpg";

//utils
// import {
//    validateText,
//    validateEmail,
//    validatePassword,
//    validateCpf,
//    validateCep,
// } from "../../Utils/regex";

//components
import Button from "../../components/ButtonLoginRegister/Button";
import Input from "../../components/Input/Input";

// axios
import http from "../../db/http";

const Register = () => {
   //STATE DE VALUE CLIENTE
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [serial, setSerial] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [passwordConf, setPasswordConf] = useState("");

   //STATE DE ERROR CLIENTE
   // const [firstNameErr, setFirstNameErr] = useState(false);
   // const [lastNameErr, setLastNameErr] = useState(false);
   // const [serialErr, setSerialErr] = useState(false);
   // const [emailErr, setEmailErr] = useState(false);
   // const [passwordErr, setPasswordErr] = useState(false);
   const [error, setError] = useState("");

   const navigate = useNavigate();

   // //VALIDAÇÃO FORA DO INPUT
   // const onBlurHandler = (e) => {
   //    switch (e.target.name) {
   //       //CLIENTE
   //       case "firstName":
   //          if (!validateText.test(firstName) && firstName.trim() !== "") {
   //             return setFirstNameErr(true);
   //          } else {
   //             return setFirstNameErr(false);
   //          }

   //       case "lastName":
   //          if (!validateText.test(lastName) && lastName.trim() !== "") {
   //             return setLastNameErr(true);
   //          } else {
   //             return setLastNameErr(false);
   //          }

   //       case "serial":
   //          if (!validateCep.test(serial) && serial.trim() !== "") {
   //             return setSerialErr(true);
   //          } else {
   //             return setSerialErr(false);
   //          }

   //       case "email":
   //          if (!validateEmail.test(email) && email.trim() !== "") {
   //             return setEmailErr(true);
   //          } else {
   //             return setEmailErr(false);
   //          }

   //       case "password":
   //          if (!validatePassword.test(password) && password.trim() !== "") {
   //             return setPasswordErr(true);
   //          } else {
   //             return setPasswordErr(false);
   //          }
   //    }
   // };

   //MENSAGEM DE ERRO DO INPUT
   // useEffect(() => {
   //    if (!validateText.test(firstName) && firstName.trim() !== "") {
   //       return setFirstNameErr(true);
   //    } else {
   //       setFirstNameErr(false);
   //    }

   //    if (validateCpf.test(lastName) || lastName.trim() === "") {
   //       setLastNameErr(false);
   //    }

   //    if (!validateCep.test(serial) && serial.trim() !== "") {
   //       return setSerialErr(true);
   //    } else {
   //       setSerialErr(false);
   //    }

   //    if (validateEmail.test(email) || email.trim() === "") {
   //       setEmailErr(false);
   //    }

   //    if (validatePassword.test(password) || password.trim() === "") {
   //       setPasswordErr(false);
   //    }
   // }, [firstName, lastName, serial, email, password]);

   //API
   const registerSubmit = async () => {
      try {
         const response = await http.post("/users", {
            name: firstName,
            // serial,
            email,
            password,
         });

         console.log('RESPONSE', response.data);
         navigate("/");
         return response;
      } catch (error) {
         if (error.response) {
            const { data } = error.response;

            if (data.err === "email inválido") {
               toast.error(
                  "Email inválido. Por favor, verifique o Email digitado.",
                  {
                     className: "error-toast",
                     position: "bottom-left",
                     autoClose: 5000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     pauseOnHover: true,
                     draggable: true,
                     progress: undefined,
                     theme: "colored",
                  }
               );
            } else if (data.err === "senha inválida") {
               toast.error(
                  "Senha inválido. Por favor, verifique a Senha digitada.",
                  {
                     className: "error-toast",
                     position: "bottom-left",
                     autoClose: 5000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     pauseOnHover: true,
                     draggable: true,
                     progress: undefined,
                     theme: "colored",
                  }
               );
            } else if (data.error === "Este email ou CPF já está em uso.") {
               toast.error(
                  "Este email ou CPF já está em uso. Por favor, escolha outro.",
                  {
                     className: "error-toast",
                     position: "bottom-left",
                     autoClose: 5000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     pauseOnHover: true,
                     draggable: true,
                     progress: undefined,
                     theme: "colored",
                  }
               );
            }
         } else {
            toast.info("Erro de conexão. Entre contato com o suporte.", {
               className: "error-toast",
               position: "bottom-left",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "colored",
            });
         }
         console.log(error);
      }
   };

   //CADASTRADO DE USUÁRIO
   const handleSignup = (e) => {
      e.preventDefault();

      //RETORNA ERRO CASO FALTAR UM CAMPO PARA PREENCHER
      if (
         !email |
         !passwordConf |
         !password |
         !firstName |
         !lastName |
         !serial
      ) {
         return toast.warn("Preencha todos os campos", {
            className: "error-toast",
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         });
      }

      //RETORNA ERRO CASO A CONFIRMAÇÃO DE SENHA FOR DIFERENTE DA SENHA
      if (password !== passwordConf) {
         return toast.warn("As senhas precisam ser iguais", {
            className: "error-toast",
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         });
      }

      if (
         firstName &&
         lastName &&
         serial &&
         email &&
         password &&
         passwordConf
         // firstNameErr &&
         // lastNameErr &&
         // serialErr &&
         // emailErr &&
         // passwordErr
      )
         if (registerSubmit()) {
            //SE TUDO ESTIVER OK ELE CADASTRA O USUÁRIO
            return;
         }
   };

   return (
      <>
         <ToastContainer />
         <div className={style.pageCadastro}>
            <form className={style.cadastro} onSubmit={handleSignup}>
               <label className={style.label1}>
                  Preencha os campos abaixo para se Cadastrar
               </label>
               <div className={style.formulario}>
                  <div className={style.inputPessoa}>
                     <Input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        required
                        value={firstName}
                        onChange={(e) => [
                           setFirstName(e.target.value),
                           setError(""),
                        ]}
                        // onBlur={onBlurHandler}
                     />
                     {/* <div>
                        {firstNameErr && (
                           <p className={style.labelError}>
                              Digite um nome válido
                           </p>
                        )}
                     </div> */}
                     <Input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        required
                        value={lastName}
                        onChange={(e) => [
                           setLastName(e.target.value),
                           setError(""),
                        ]}
                        // onBlur={onBlurHandler}
                     />
                     {/* <div>
                        {lastNameErr && (
                           <p className={style.labelError}>
                              Digite um CPF válido
                           </p>
                        )}
                     </div> */}
                     <Input
                        name="serial"
                        type="text"
                        placeholder="Serial"
                        required
                        value={serial}
                        onChange={(e) => [
                           setSerial(e.target.value),
                           setError(""),
                        ]}
                        // onBlur={onBlurHandler}
                     />
                     {/* <div>
                        {serialErr && (
                           <p className={style.labelError}>
                              Digite um CEP válido
                           </p>
                        )}
                     </div> */}
                     <Input
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={(e) => [
                           setEmail(e.target.value),
                           setError(""),
                        ]}
                        // onBlur={onBlurHandler}
                     />
                     {/* <div>
                        {emailErr && (
                           <p className={style.labelError}>
                              Digite um e-mail válido
                           </p>
                        )}
                     </div> */}
                     <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => [
                           setPassword(e.target.value),
                           setError(""),
                        ]}
                        // onBlur={onBlurHandler}
                     />
                     {/* <div>
                        {passwordErr && (
                           <p className={style.labelError}>
                              Deve ter 6+ caracteres, 1 letra e 1 número
                           </p>
                        )}
                     </div> */}
                     <Input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        value={passwordConf}
                        onChange={(e) => [
                           setPasswordConf(e.target.value),
                           setError(""),
                        ]}
                        // onBlur={onBlurHandler}
                     />
                  </div>
               </div>
               <label className={style.labelError}>{error}</label>
               <Button Text="Cadastrar-se" onClick={handleSignup} />
               <label className={style.label2}>Já tem uma conta?</label>
               <Link to="/" className={style.link}>
                  &nbsp;Acesse aqui
               </Link>
            </form>
            <img className={style.animacao} src={Background} alt="" />
         </div>
      </>
   );
};

export default Register;
