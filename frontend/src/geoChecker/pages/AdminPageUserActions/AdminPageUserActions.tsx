import { useNavigate } from "react-router";
import Actions from "../../components/Actions/Actions";
import { ActionType } from "../../types";

const AdminPageUserActions = (): React.ReactElement => {
  const navigate = useNavigate();

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
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="back-button"
      >
        Volver
      </button>
    </>
  );
};

export default AdminPageUserActions;
