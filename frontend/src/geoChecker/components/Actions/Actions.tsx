import { ActionType } from "../../types";

export default function Actions({ name, path }: ActionType) {
  return (
    <li>
      <a href={path} className="nav-link">
        {name}
      </a>
    </li>
  );
}
