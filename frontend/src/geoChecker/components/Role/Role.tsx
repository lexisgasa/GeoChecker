import { RoleType } from "../../types";
import { useNavigate } from "react-router-dom";

const Role = ({ name, path }: RoleType): React.ReactElement => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    navigate(`/login?redirect=${path}`);
  };

  return (
    <li>
      <a href={path} className="nav-link" onClick={handleClick}>
        {name}
      </a>
    </li>
  );
};

export default Role;
