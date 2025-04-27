import { useState } from "react";
import ModifyCompanyNewDataForm from "../../components/ModifyCompanyNewDataForm/ModifyCompanyNewDataForm";
import { CompanyData } from "../../types";

const ModifyCompanyNewData = (): React.ReactElement => {
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: "",
  });

  return (
    <>
      <h1>Modificar empresa</h1>
      <div className="general-form">
        <p>Introduce los nuevos datos</p>
        <ModifyCompanyNewDataForm
          companyData={companyData}
          setCompanyData={setCompanyData}
        />
      </div>
    </>
  );
};

export default ModifyCompanyNewData;
