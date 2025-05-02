import { useState } from "react";
import ModifyUserForm from "../../components/ModifyUserForm/ModifyUserForm";
import { IdUserData } from "../../types";

const ModifyUser = (): React.ReactElement => {
  const [userData, setUserData] = useState<IdUserData>({
    userId: "",
  });

  return (
    <>
      {/* // TODO LOGICA breadcrumbs */}
      <h2>Modificar Usuario</h2>
      <div className="general-form">
        <p>Introduce el número de identificación del usuario</p>
        <ModifyUserForm userData={userData} setUserData={setUserData} />
      </div>
    </>
  );
};

export default ModifyUser;
