import { useState } from "react";
import { UserData } from "../../types";
import ReturnButton from "../../../components/Buttons/ReturnButton";
import { login } from "../../services/authService";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const redirectPath = params.get("redirect") || "/admin";

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await login(userData.username, userData.password);
      localStorage.setItem("token", response.token);
      toast.success("Inicio de sesión exitoso");

      navigate(`/${redirectPath}`);
    } catch {
      toast.error("Usuario o contraseña incorrectos");
    } finally {
      setIsLoading(false);
    }
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
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={userData.username}
            onChange={handleUserData}
            required
            disabled={isLoading}
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
              disabled={isLoading}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
              disabled={isLoading}
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
          <button type="submit" className="action-button" disabled={isLoading}>
            {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
          <ReturnButton />
        </div>
      </form>
    </>
  );
}
