import { useState } from "react";
import DeleteUserForm from "../../components/DeleteUserForm/DeleteUserForm";
import { IdUserData } from "../../types";

const DeleteUser = (): React.ReactElement => {
  const [userData, setUserData] = useState<IdUserData>({
    userId: "",
  });

  return (
    <>
      <h2>Borrar Usuario</h2>
      <div className="general-form">
        <p>Introduce el número de identificación del usuario</p>
        <DeleteUserForm userData={userData} setUserData={setUserData} />
      </div>
    </>
  );
};

export default DeleteUser;
