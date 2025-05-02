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
import AdminPageCompanyActions from "../../geoChecker/pages/AdminPageCompanyActions/AdminPageCompanyActions";
import CreateUser from "../../geoChecker/pages/CreateUser/CreateUser";
import ModifyUser from "../../geoChecker/pages/ModifyUser/ModifyUser";
import ModifyUserNewData from "../../geoChecker/pages/ModifyUserNewData/ModifyUserNewData";
import DeleteUser from "../../geoChecker/pages/DeleteUser/DeleteUser";
import CreateCompany from "../../geoChecker/pages/CreateCompany/CreateCompany";
import ModifyCompany from "../../geoChecker/pages/ModifyCompany/ModifyCompany";
import ModifyCompanyNewData from "../../geoChecker/pages/ModifyCompanyNewData/ModifyCompanyNewData";
import DeleteCompany from "../../geoChecker/pages/DeleteCompany/DeleteCompany";
import CheckIn from "../../geoChecker/pages/CheckIn/CheckIn";
import CheckInConfirmation from "../../geoChecker/pages/CheckInConfirmation/CheckInConfirmation";
import CheckOut from "../../geoChecker/pages/CheckOut/CheckOut";
import CheckOutConfirmation from "../../geoChecker/pages/CheckOutConfirmation/CheckOutConfirmation";
import Review from "../../geoChecker/pages/Review/Review";
import History from "../../geoChecker/pages/History/History";
import MonthlyHistory from "../../geoChecker/pages/MonthlyHistory/MonthlyHistory";
import DetailHistory from "../../geoChecker/pages/DetailHistory/DetailHistory";
import WorkerReview from "../../geoChecker/pages/WorkerReview/WorkerReview";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<RoleSelectionPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="checkin" element={<CheckIn />} />
      <Route path="checkin-confirmation" element={<CheckInConfirmation />} />
      <Route path="worker" element={<WorkerPage />} />
      <Route path="supervisor" element={<SupervisorPage />} />
      <Route path="worker" element={<WorkerPage />} />
      <Route path="worker-review" element={<WorkerReview />} />
      <Route path="admin" element={<AdminPage />} />
      <Route path="admin-users" element={<AdminPageUserActions />} />
      <Route path="create-user" element={<CreateUser />} />
      <Route path="modify-user" element={<ModifyUser />} />
      <Route path="modify-user-new" element={<ModifyUserNewData />} />
      <Route path="delete-user" element={<DeleteUser />} />
      <Route path="admin-companies" element={<AdminPageCompanyActions />} />
      <Route path="create-company" element={<CreateCompany />} />
      <Route path="modify-company" element={<ModifyCompany />} />
      <Route path="modify-company-new" element={<ModifyCompanyNewData />} />
      <Route path="delete-company" element={<DeleteCompany />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="checkout-confirmation" element={<CheckOutConfirmation />} />
      <Route path="review" element={<Review />} />
      <Route path="history" element={<History />} />
      <Route path="monthly-history" element={<MonthlyHistory />} />
      <Route path="detail-history" element={<DetailHistory />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
