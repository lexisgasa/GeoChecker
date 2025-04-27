import { useState } from "react";
import ReturnButton from "../../../components/Buttons/ReturnButton";
import { ModifyUserData } from "../../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DeleteUserForm.css";

interface DeleteUserDataProps {
  userData: ModifyUserData;
  setUserData: React.Dispatch<React.SetStateAction<ModifyUserData>>;
}

export default function DeleteUserForm({
  userData,
  setUserData,
}: DeleteUserDataProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteUser = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!showConfirmation) {
      showDeleteConfirmationToast();
    }
  };

  const handleUserData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((currentUserData) => ({
      ...currentUserData,
      [event.target.id]: event.target.value,
    }));
  };

  const showDeleteConfirmationToast = () => {
    toast(
      <div className="confirmation-toast">
        <p>
          ¿Estás seguro de que quieres borrar el usuario con la ID{" "}
          <strong>{userData.userId}</strong>?
        </p>
        <div className="toast-buttons">
          <button
            onClick={() => handleConfirmDelete()}
            className="delete-button"
          >
            Borrar
          </button>
          <button onClick={() => toast.dismiss()} className="back-button">
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  const handleConfirmDelete = async () => {
    console.log("User deleted:", userData);
    toast.dismiss();
    toast.success("Usuario borrado correctamente");
    setShowConfirmation(false);
  };

  return (
    <>
      <ToastContainer />
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
    </>
  );
}
