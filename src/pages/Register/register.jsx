import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content, Logo, Page, Words } from "./styled";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import { DataContext } from "../../Context/dataContext";
import { DesafioNekiApi } from "../../Service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Register() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordcofirm, setPasswordConfirm] = useState("");
  const { packageUserData } = useContext(DataContext);

  const notify = () =>
    toast.success("Cadastro feito com sucesso", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifyPassword = () =>
    toast.error("As senhas não coincidem", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const Navigation = useNavigate();

  const handleRegistration = async () => {
    console.log(`Login: ${login} Senha: ${password}`);
    var tokenJwt = null;

    if (password == passwordcofirm) {
      try {
        console.log("vc pensa que o flamengo eh time");

        const returned = await DesafioNekiApi.post("/auth/registration", {
          userLogin: login,
          userPassword: password,
        });

        console.log("Mengo " + JSON.stringify(returned));

        if (returned.status === 200) {
          tokenJwt = returned.data;
          console.log("Retono Token:" + JSON.stringify(tokenJwt));

          packageUserData(tokenJwt["jwt-token"]);
          notify();
          setTimeout(() => {
            console.log("Delayed for 3 second.");
            Navigation("/");
          }, "3000");
        }
      } catch (error) {}
    } else {
      notifyPassword();
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
        <Words>Sing-Up</Words>
        <Input
          placeholder="Insira um nome de login"
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          placeholder="Insira sua senha"
          type={showPassword == true ? "login" : "password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type={showPassword == true ? "login" : "password"}
          placeholder="Confirme sua senha"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <Button Text="Mostrar Senha" onClick={PasswordView}></Button>

        <Button Text="Criar conta" onClick={() => handleRegistration()} />
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
      </Content>
    </Container>
    </Page>
  );
}
