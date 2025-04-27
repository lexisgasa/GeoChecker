import { useState } from "react";
import ModifyCompanyForm from "../../components/ModifyCompanyForm/ModifyCompanyForm";
import { ModifyCompanyData } from "../../types";

const ModifyCompany = (): React.ReactElement => {
  const [companyData, setCompanyData] = useState<ModifyCompanyData>({
    companyId: "",
  });

  return (
    <>
      {/* // TODO LOGICA breadcrumbs */}
      <h1>Modificar empresa</h1>
      <div className="general-form">
        <p>Introduce el número de identificación de la empresa</p>
        <ModifyCompanyForm
          companyData={companyData}
          setCompanyData={setCompanyData}
        />
      </div>
    </>
  );
};

export default ModifyCompany;
