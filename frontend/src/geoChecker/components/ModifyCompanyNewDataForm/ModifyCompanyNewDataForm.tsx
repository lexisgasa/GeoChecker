import { useState } from "react";
import ReturnButton from "../../../components/Buttons/ReturnButton";
import { CompanyData } from "../../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ModifyCompanyNewDataProps {
  companyData: CompanyData;
  setCompanyData: React.Dispatch<React.SetStateAction<CompanyData>>;
}

export default function ModifyCompanyNewDataForm({
  companyData,
  setCompanyData,
}: ModifyCompanyNewDataProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleUpdateCompany = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!showConfirmation) {
      showUpdateConfirmationToast();
    }
  };

  const handleCompanyData = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCompanyData((currentCompanyData) => {
      return {
        ...currentCompanyData,
        [event.target.id]: event.target.value,
      };
    });
  };

  const showUpdateConfirmationToast = () => {
    toast(
      <div className="confirmation-toast">
        <p>
          ¿Estás seguro de que quieres modificar la empresa con el nombre{" "}
          <strong>{companyData.name}</strong>?
        </p>
        <div className="toast-buttons">
          <button
            onClick={() => handleConfirmUpdate()}
            className="action-button"
          >
            Modificar
          </button>
          <button onClick={() => toast.dismiss()} className="back-button">
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  const handleConfirmUpdate = async () => {
    console.log("Company:", companyData);
    toast.dismiss();
    toast.success("Empresa modificada correctamente");
    setShowConfirmation(false);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleUpdateCompany}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={companyData.name}
            onChange={handleCompanyData}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="action-button">
            Modificar
          </button>
          <ReturnButton />
        </div>
      </form>
    </>
  );
}
