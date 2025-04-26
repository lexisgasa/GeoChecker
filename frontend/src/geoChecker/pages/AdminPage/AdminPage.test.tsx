import { screen } from "@testing-library/react";
import AdminPage from "./AdminPage";
import { renderWithRouter } from "../../../render-utils";

describe("Given the AdminPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the actions 'Usuarios' and 'Empresas'", () => {
      const usersActionText = /usuarios/i;
      const companiesActionText = /empresas/i;

      renderWithRouter(<AdminPage />);

      const usersAction = screen.getByRole("link", {
        name: usersActionText,
      });

      const companiesAction = screen.getByRole("link", {
        name: companiesActionText,
      });

      expect(usersAction).toBeInTheDocument();
      expect(companiesAction).toBeInTheDocument();
    });
  });
});
