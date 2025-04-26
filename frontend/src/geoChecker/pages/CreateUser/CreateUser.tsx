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
      <CreateUserForm userData={userData} setUserData={setUserData} />
    </>
  );
};

export default CreateUser;
