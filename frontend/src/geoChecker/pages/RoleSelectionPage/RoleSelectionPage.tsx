import Role from "../../components/Role/Role";
import { RoleType } from "../../types";
import "./RoleSelectionPage.css";

const roles: RoleType[] = [
  { id: 1, name: "Trabajador", path: "trabajador" },
  { id: 2, name: "Supervisor", path: "supervisor" },
  { id: 3, name: "Administrador", path: "administrador" },
];

const RoleSelectionPage = (): React.ReactElement => {
  return (
    <>
      <h2>Bienvenido</h2>
      <p>Escoge tu rol para continuar</p>
      <ul className="link-container">
        {roles.map((role) => (
          <Role key={role.id} {...role} />
        ))}
      </ul>
    </>
  );
};

export default RoleSelectionPage;
