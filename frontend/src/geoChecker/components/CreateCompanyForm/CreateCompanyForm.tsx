import ReturnButton from "../../../components/Buttons/ReturnButton";
import { CompanyData } from "../../types";

interface CreateCompanyDataProps {
  companyData: CompanyData;
  setCompanyData: React.Dispatch<React.SetStateAction<CompanyData>>;
}

export default function CreateCompanyForm({
  companyData,
  setCompanyData,
}: CreateCompanyDataProps) {
  const handleCreateCompany = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO logica
    console.log("Company data:", companyData);
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
        <button type="submit" className="action-button">
          Crear
        </button>
        <ReturnButton />
      </div>
    </form>
  );
}
