import { useState } from "react";
import { UserFullData } from "../../types";
import CreateUserForm from "../../components/CreateUserForm/CreateUserForm";
import { GeoCheckerClient } from "../../api/geoCheckerClient";

const CreateUser = (): React.ReactElement => {
  const [userData, setUserData] = useState<UserFullData>({
    company: "",
    name: "",
    password: "",
  });

  const createUser = async (userFormData: UserFullData): Promise<void> => {
    const geoCheckerClient = new GeoCheckerClient();

    await geoCheckerClient.createUser(userFormData);
  };

  return (
    <>
      <h1>Crear usuario</h1>
      <div className="general-form">
        <p>Introduce los siguientes datos para registrar tu cuenta</p>
        <CreateUserForm
          userData={userData}
          setUserData={setUserData}
          onSubmit={createUser}
        />
      </div>
    </>
  );
};

export default CreateUser;
