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
import ContactPage from "../../geoChecker/pages/ContactPage/ContactPage";
import SupervisorPage from "../../geoChecker/pages/SupervisorPage/SupervisorPage";
import AdminPage from "../../geoChecker/pages/AdminPage/AdminPage";
import AdminPageUserActions from "../../geoChecker/pages/AdminPageUserActions/AdminPageUserActions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<RoleSelectionPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="worker" element={<WorkerPage />} />
      <Route path="supervisor" element={<SupervisorPage />} />
      <Route path="admin" element={<AdminPage />} />
      <Route path="admin-users" element={<AdminPageUserActions />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
