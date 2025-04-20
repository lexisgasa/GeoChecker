import Actions from "../../components/Actions/Actions";
import { ActionType } from "../../types";
import "../../../styles/styles.css";

const SupervisorPage = (): React.ReactElement => {
  const actions: ActionType[] = [
    { id: 1, name: "Check in", path: "/checkin" },
    { id: 2, name: "Check out", path: "/checkout" },
    { id: 3, name: "Consulta de registro", path: "/history" },
    { id: 4, name: "Consulta por trabajador", path: "/worker-review" },
  ];

  return (
    <>
      {/* TODO: Logica navegación
    <p className="breadcrumbs">Principal</p> */}
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

export default SupervisorPage;
