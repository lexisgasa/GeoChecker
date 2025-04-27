import Actions from "../../components/Actions/Actions";
import { ActionType } from "../../types";
import ReturnButton from "../../../components/Buttons/ReturnButton";

const AdminPageUserActions = (): React.ReactElement => {
  const actions: ActionType[] = [
    { id: 1, name: "Crear usuario", path: "/create-user" },
    { id: 2, name: "Modificar usuario", path: "/modify-user" },
    { id: 3, name: "Eliminar usuario", path: "/delete-user" },
  ];

  return (
    <>
      <h2>Acción de usuarios</h2>
      <p>Selecciona la acción que desees hacer a continuación</p>
      <ul className="action-list">
        {actions.map((action) => (
          <Actions key={action.id} {...action} />
        ))}
      </ul>
      <ReturnButton />
    </>
  );
};

export default AdminPageUserActions;
