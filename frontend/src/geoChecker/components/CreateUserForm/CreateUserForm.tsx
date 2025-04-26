import { useState } from "react";
import { UserFullData } from "../../types";
import ReturnButton from "../../../components/Buttons/ReturnButton";
import "./CreateUserForm.css";

interface CreateUserDataProps {
  userData: UserFullData;
  setUserData: React.Dispatch<React.SetStateAction<UserFullData>>;
}

export default function CreateUserForm({
  userData,
  setUserData,
}: CreateUserDataProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleCreateUser = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO Implementar la logica
    console.log("User creation data:", userData);
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
    <form onSubmit={handleCreateUser} className="create-user-form">
      <div className="form-group">
        <label htmlFor="company">Introduce la empresa</label>
        <input
          type="text"
          id="company"
          value={userData.company}
          onChange={handleUserData}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Introduce el nombre</label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={handleUserData}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Introduce la contraseña</label>
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
        <button type="submit" className="create-button">
          Crear
        </button>
        <ReturnButton />
      </div>
    </form>
  );
}
