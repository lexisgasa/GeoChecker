import ReturnButton from "../../../components/Buttons/ReturnButton";
import { ModifyCompanyData } from "../../types";

interface ModifyCompanyDataProps {
  companyData: ModifyCompanyData;
  setCompanyData: React.Dispatch<React.SetStateAction<ModifyCompanyData>>;
}

export default function ModifyCompanyForm({
  companyData,
  setCompanyData,
}: ModifyCompanyDataProps) {
  const handleModifyCompany = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO Implementar la logica
    console.log("Company modified data:", companyData);
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

  return (
    <form onSubmit={handleModifyCompany} className="modify-company-form">
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
        <button type="submit" className="action-button">
          Modificar
        </button>
        <ReturnButton />
      </div>
    </form>
  );
}
