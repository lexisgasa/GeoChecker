import { useState } from "react";
import ModifyUserForm from "../../components/ModifyUserForm/ModifyUserForm";
import { ModifyUserData } from "../../types";

const ModifyUser = (): React.ReactElement => {
  const [userData, setUserData] = useState<ModifyUserData>({
    userId: "",
  });

  return (
    <>
      {/* // TODO LOGICA breadcrumbs */}
      <h1>Borrar Usuario</h1>
      <ModifyUserForm userData={userData} setUserData={setUserData} />
    </>
  );
};

export default ModifyUser;
