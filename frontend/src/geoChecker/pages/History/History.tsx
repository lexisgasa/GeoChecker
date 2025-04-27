import ReturnButton from "../../../components/Buttons/ReturnButton";
import Actions from "../../components/Actions/Actions";
import { ActionType } from "../../types";

const History = (): React.ReactElement => {
  const actions: ActionType[] = [
    { id: 1, name: "Registro mensual", path: "/admin-users" },
    { id: 2, name: "Detalle de registro", path: "/admin-companies" },
  ];

  return (
    <>
      <h2>Consulta de registro</h2>
      <ul className="action-list">
        {actions.map((action) => (
          <Actions key={action.id} {...action} />
        ))}
      </ul>
      <ReturnButton />
    </>
  );
};

export default History;
