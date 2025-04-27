import Actions from "../../components/Actions/Actions";
import { ActionType } from "../../types";
import ReturnButton from "../../../components/Buttons/ReturnButton";

const AdminPageCompanyActions = (): React.ReactElement => {
  const actions: ActionType[] = [
    { id: 1, name: "Crear empresa", path: "/create-company" },
    { id: 2, name: "Modificar empresa", path: "/modify-company" },
    { id: 3, name: "Eliminar empresa", path: "/delete-company" },
  ];

  return (
    <>
      <h2>Acción de empresas</h2>
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

export default AdminPageCompanyActions;
