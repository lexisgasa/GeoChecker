import { screen } from "@testing-library/dom";
import { renderWithRouter } from "../../../render-utils";
import AdminPageUserActions from "./AdminPageUserActions";

describe("Given the AdminPageUserActions component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<AdminPageUserActions />);
    });

    test("Then it should display 'Acción de usuarios' inside a heading", () => {
      const titleText = /acción de usuarios/i;

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show the actions 'Crear usuario', 'Modificar usuario' and 'Eliminar usuario'", () => {
      const createUserText = /crear usuario/i;
      const modifyUserText = /modificar usuario/i;
      const deleteUserText = /eliminar usuario/i;

      const createUser = screen.getByRole("link", {
        name: createUserText,
      });
      const modifyUser = screen.getByRole("link", {
        name: modifyUserText,
      });
      const deleteUser = screen.getByRole("link", {
        name: deleteUserText,
      });

      expect(createUser).toBeInTheDocument();
      expect(modifyUser).toBeInTheDocument();
      expect(deleteUser).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Volver'", () => {
      const returnButtonText = /volver/i;

      const returnButton = screen.getByRole("button", {
        name: returnButtonText,
      });

      expect(returnButton).toBeInTheDocument();
    });
  });
});
