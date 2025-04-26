import Actions from "../../components/Actions/Actions";
import { ActionType } from "../../types";
import "../../../styles/styles.css";

const AdminPage = () => {
  const actions: ActionType[] = [
    { id: 1, name: "Usuarios", path: "/users" },
    { id: 2, name: "Empresas", path: "/companies" },
  ];

  return (
    <>
      <h2>¿Qué quieres hacer?</h2>
      <p>Selecciona la acción que desees hacer a continuación</p>
      <ul className="action-list">
        {actions.map((action) => (
          <Actions key={action.id} {...action} />
        ))}
      </ul>
    </>
  );
};

export default AdminPage;
