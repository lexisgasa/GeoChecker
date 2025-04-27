import ReturnButton from "../../../components/Buttons/ReturnButton";
import { ModifyUserData } from "../../types";
import "./DeleteUserForm.css";

interface DeleteUserDataProps {
  userData: ModifyUserData;
  setUserData: React.Dispatch<React.SetStateAction<ModifyUserData>>;
}

export default function DeleteUserForm({
  userData,
  setUserData,
}: DeleteUserDataProps) {
  const handleDeleteUser = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO logica
    console.log("User deleted:", userData);
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
    <form onSubmit={handleDeleteUser}>
      <div className="form-group">
        <label htmlFor="userId">ID</label>
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
