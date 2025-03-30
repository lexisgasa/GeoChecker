import { Outlet } from "react-router";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <div className="app-container">
        <main className="page">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default App;
