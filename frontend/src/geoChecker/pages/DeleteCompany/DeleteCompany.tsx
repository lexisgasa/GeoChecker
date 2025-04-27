import { useState } from "react";
import DeleteCompanyForm from "../../components/DeleteCompanyForm/DeleteCompanyForm";
import { ModifyCompanyData } from "../../types";

const DeleteCompany = (): React.ReactElement => {
  const [companyData, setCompanyData] = useState<ModifyCompanyData>({
    companyId: "",
  });

  return (
    <>
      <h1>Borrar empresa</h1>
      <div className="general-form">
        <p>Introduce el número de identificación de la empresa</p>
        <DeleteCompanyForm
          companyData={companyData}
          setCompanyData={setCompanyData}
        />
      </div>
    </>
  );
};

export default DeleteCompany;
