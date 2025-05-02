import Actions from "../../components/Actions/Actions";
import { ActionType } from "../../types";
import ReturnButton from "../../../components/Buttons/ReturnButton";

const WorkerReviewActions = (): React.ReactElement => {
  const actions: ActionType[] = [
    { id: 1, name: "Registro mensual", path: "/monthly-history" },
    { id: 2, name: "Detalle de registro", path: "/detail-history" },
    { id: 3, name: "Revisión", path: "/review" },
  ];

  return (
    <>
      <h2>Acciones de revisión</h2>
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

export default WorkerReviewActions;
