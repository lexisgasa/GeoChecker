import { useState } from "react";
import { CompanyData } from "../../types";
import CreateCompanyForm from "../../components/CreateCompanyForm/CreateCompanyForm";

const CreateCompany = (): React.ReactElement => {
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: "",
  });

  return (
    <>
      {/* // TODO: breadcrumbs react-tostify */}
      <h1>Crear empresa</h1>
      <div className="general-form">
        <p>Introduce los siguientes datos para registrar la empresa</p>
        <CreateCompanyForm
          companyData={companyData}
          setCompanyData={setCompanyData}
        />
      </div>
    </>
  );
};

export default CreateCompany;
