import { useState } from "react";
import DeleteUserForm from "../../components/DeleteUserForm/DeleteUserForm";
import { ModifyUserData } from "../../types";

const DeleteUser = (): React.ReactElement => {
  const [userData, setUserData] = useState<ModifyUserData>({
    userId: "",
  });

  return (
    <>
      <h1>Borrar Usuario</h1>
      <div className="general-form">
        <p>Introduce el número de identificación del usuario</p>
        <DeleteUserForm userData={userData} setUserData={setUserData} />
      </div>
    </>
  );
};

export default DeleteUser;
