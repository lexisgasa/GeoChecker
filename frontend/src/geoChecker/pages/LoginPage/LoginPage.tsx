import { useState } from "react";
import LoginPageForm from "../../components/LoginPageForm/LoginPageForm";
import { UserData } from "../../types";
import "./LoginPage.css";

const LoginPage = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
  });

  return (
    <>
      <h1>Inicio de sesión</h1>
      <div className="general-form">
        <p>Introduce tus datos de usuario</p>
        <LoginPageForm userData={userData} setUserData={setUserData} />
        <div className="help-section">
          <p>¿Tienes algún problema?</p>
          <a href="/contact" className="admin-link">
            Contactar administrador
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
