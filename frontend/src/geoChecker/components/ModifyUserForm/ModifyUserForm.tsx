import ReturnButton from "../../../components/Buttons/ReturnButton";
import { ModifyUserData } from "../../types";
import "./ModifyUserForm.css";

interface ModifyUserDataProps {
  userData: ModifyUserData;
  setUserData: React.Dispatch<React.SetStateAction<ModifyUserData>>;
}

export default function ModifyUserForm({
  userData,
  setUserData,
}: ModifyUserDataProps) {
  const handleDeleteUser = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO Implementar la logica
    console.log("User deleted data:", userData);
  };

  const handleUserData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((currentUserData) => {
      return {
        ...currentUserData,
        [event.target.id]: event.target.value,
      };
    });
  };

  return (
    <form onSubmit={handleDeleteUser} className="modify-user-form">
      <div className="form-group">
        <label htmlFor="userId">Introduce el id de usuario</label>
        <input
          type="number"
          id="userId"
          value={userData.userId}
          onChange={handleUserData}
          required
        />
      </div>
      <div className="button-group">
        <button type="submit" className="delete-button">
          Borrar
        </button>
        <ReturnButton />
      </div>
    </form>
  );
}
