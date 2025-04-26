import { useState } from "react";
import ModifyUserNewDataForm from "../../components/ModifyUserNewDataForm/ModifyUserNewDataForm";
import { UserFullData } from "../../types";

const ModifyUserNewData = (): React.ReactElement => {
  const [userData, setUserData] = useState<UserFullData>({
    company: "",
    name: "",
    password: "",
  });

  return (
    <>
      <h1>Modificar Usuario</h1>
      <div className="general-form">
        <p>Introduce los nuevos datos</p>
        <ModifyUserNewDataForm userData={userData} setUserData={setUserData} />
      </div>
    </>
  );
};

export default ModifyUserNewData;
