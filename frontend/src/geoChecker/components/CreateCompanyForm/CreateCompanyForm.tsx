import { useState } from "react";
import ReturnButton from "../../../components/Buttons/ReturnButton";
import { CompanyData } from "../../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CreateCompanyDataProps {
  companyData: CompanyData;
  setCompanyData: React.Dispatch<React.SetStateAction<CompanyData>>;
}

export default function CreateCompanyForm({
  companyData,
  setCompanyData,
}: CreateCompanyDataProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCreateCompany = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!showConfirmation) {
      showCreateConfirmationToast();
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

  const showCreateConfirmationToast = () => {
    toast(
      <div className="confirmation-toast">
        <p>
          ¿Estás seguro de que deseas crear la empresa con el nombre{" "}
          <strong>{companyData.name}</strong>?
        </p>
        <div className="toast-buttons">
          <button
            onClick={() => handleConfirmCreate()}
            className="confirmation-button"
          >
            Crear
          </button>
          <button onClick={() => toast.dismiss()} className="back-button">
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  const handleConfirmCreate = async () => {
    console.log("Company created:", companyData);
    toast.dismiss();
    toast.success("Empresa creada correctamente");
    setShowConfirmation(false);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleCreateCompany}>
        <div className="form-group">
          <label htmlFor="name">Introduce el nombre de empresa</label>
          <input
            type="text"
            id="name"
            value={companyData.name}
            onChange={handleCompanyData}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="confirmation-button">
            Crear
          </button>
          <ReturnButton />
        </div>
      </form>
    </>
  );
}
