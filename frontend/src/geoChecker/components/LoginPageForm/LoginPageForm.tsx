import { useState } from "react";
import { UserData } from "../../types";
import ReturnButton from "../../../components/Buttons/ReturnButton";
import "./LoginPageForm.css";

interface UserDataProps {
  userData: {
    username: string;
    password: string;
  };
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export default function LoginPageForm({
  userData,
  setUserData,
}: UserDataProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO Implementar la logica
    console.log(`Login data: ${userData.username}, ${userData.password}`);
  };

  const handleUserData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((currentUserData) => {
      return {
        ...currentUserData,
        [event.target.id]: event.target.value,
      };
    });
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <div className="form-group">
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          value={userData.username}
          onChange={handleUserData}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={userData.password}
            onChange={handleUserData}
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="button-group">
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
        <ReturnButton />
      </div>
    </form>
  );
}
