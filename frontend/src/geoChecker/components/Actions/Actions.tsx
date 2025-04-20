import { ActionType } from "../../types";

const handleActionClick = (event: React.MouseEvent): void => {
  event.preventDefault();
  // TODO: logica
};

export default function Actions({ name, path }: ActionType) {
  return (
    <li>
      <a href={path} className="nav-link" onClick={handleActionClick}>
        {name}
      </a>
    </li>
  );
}
