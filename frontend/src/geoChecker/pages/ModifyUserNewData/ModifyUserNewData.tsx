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
      <ModifyUserNewDataForm userData={userData} setUserData={setUserData} />
    </>
  );
};

export default ModifyUserNewData;
