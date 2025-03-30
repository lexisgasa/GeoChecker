import { Link } from "react-router";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <Link to={"/"}>
        <h1 className="header-title">GeoChecker</h1>
      </Link>
    </header>
  );
};

export default Header;
