import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import App from "../App/App";
import RoleSelectionPage from "../../geoChecker/pages/RoleSelectionPage/RoleSelectionPage";
import NotFound from "../pages/NotFound/NotFound";
import LoginPage from "../../geoChecker/pages/LoginPage/LoginPage";
import WorkerPage from "../../geoChecker/pages/WorkerPage/WorkerPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<RoleSelectionPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="worker" element={<WorkerPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
