import { useState } from "react";
import CreateUserForm from "../../components/CreateUserForm/CreateUserForm";
import { UserFullData } from "../../types";

const CreateUser = (): React.ReactElement => {
  const [userData, setUserData] = useState<UserFullData>({
    company: "",
    name: "",
    password: "",
  });

  return (
    <>
      {/* // TODO: breadcrumbs react-tostify */}
      <h1>Crear usuario</h1>
      <div className="general-form">
        <p>Introduce los siguientes datos para registrar tu cuenta</p>
        <CreateUserForm userData={userData} setUserData={setUserData} />
      </div>
    </>
  );
};

export default CreateUser;
