import { useState } from "react";
import ReturnButton from "../../../components/Buttons/ReturnButton";
import { ModifyCompanyData } from "../../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface DeleteCompanyDataProps {
  companyData: ModifyCompanyData;
  setCompanyData: React.Dispatch<React.SetStateAction<ModifyCompanyData>>;
}

export default function DeleteCompanyForm({
  companyData,
  setCompanyData,
}: DeleteCompanyDataProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteCompany = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!showConfirmation) {
      showDeleteConfirmationToast();
    }
  };

  const handleCompanyData = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCompanyData((currentCompanyData) => ({
      ...currentCompanyData,
      [event.target.id]: event.target.value,
    }));
  };

  const showDeleteConfirmationToast = () => {
    toast(
      <div className="confirmation-toast">
        <p>
          ¿Estás seguro de que quieres borrar la empresa con la ID{" "}
          <strong>{companyData.companyId}</strong>?
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
    console.log("Company deleted:", companyData);
    toast.dismiss();
    toast.success("Empresa borrada correctamente");
    setShowConfirmation(false);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleDeleteCompany}>
        <div className="form-group">
          <label htmlFor="companyId">ID</label>
          <input
            type="number"
            id="companyId"
            value={companyData.companyId}
            onChange={handleCompanyData}
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
