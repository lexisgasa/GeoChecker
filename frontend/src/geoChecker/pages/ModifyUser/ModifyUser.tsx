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
      <h1>Modificar Usuario</h1>
      <div className="general-form">
        <p>Introduce el número de identificación del usuario</p>
        <ModifyUserForm userData={userData} setUserData={setUserData} />
      </div>
    </>
  );
};

export default ModifyUser;
