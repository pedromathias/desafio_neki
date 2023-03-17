import React from "react";
import { useState, useContext } from "react";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import {
  Container,
  Content,
  Words,
  LabelSignup,
  Strong,
  Image,
  InputPassword,
  Page,
  Logo,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/dataContext";
import { DesafioNekiApi } from "../../Service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute } from "../../Routes/privateRoutes";
import LogoNeki from "../../assets/Logo-Neki.png";

export function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { packageUserData } = useContext(DataContext);

  const Navigation = useNavigate();

  const notify = () =>
    toast.error("Login ou senha incorreta", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });


  const handleLogin = async () => {
    console.log(`Login: ${login} Senha: ${password}`);
    var tokenJwt = null;

    try {
      console.log("vc pensa que o flamengo eh time");

      const returned = await DesafioNekiApi.post("/auth/login", {
        userLogin: login,
        userPassword: password,
      });

      console.log("Mengo " + JSON.stringify(returned));

      if (returned.status === 200) {
        tokenJwt = returned.data;
        console.log("Retono Token:" + JSON.stringify(tokenJwt));

        localStorage.setItem("login_key", tokenJwt["jwt-token"]);
        packageUserData(localStorage.getItem("login_key"));
        
        Navigation("/home");
        PrivateRoute();
      }
    } catch (error) {
      notify();
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const PasswordView = () => {
    if (showPassword != true) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <Page>
      <Logo>
      <img src="https://neki-it.com.br/wp-content/uploads/2022/01/Logo-Neki.png" height="400" width='400' alt="Logo" />
      </Logo>
    <Container>
      <Content>
        <Words>Login</Words>
        {/* falta definir os sets */}
        <Input
          type="text"
          placeholder="Digite seu login"
          onChange={(e) => setLogin(e.target.value)}
        />

        <Input
          id="password"
          type={showPassword == true ? "login" : "password"}
          placeholder="Digite sua Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button Text="Mostrar Senha" onClick={PasswordView}></Button>

        {/* falta fazer funcionar */}
        <Button Text="Entrar" onClick={() => handleLogin()} />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <LabelSignup>
          Não tem uma conta?
          <Link to="/sing-up">
            <Strong> Registre-se</Strong>
          </Link>
        </LabelSignup>
      </Content>
    </Container>
    </Page>
  );
}
