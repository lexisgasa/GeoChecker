import { screen } from "@testing-library/react";
import AdminPageCompanyActions from "./AdminPageCompanyActions";
import { renderWithRouter } from "../../../render-utils";

describe("Given the AdminPageCompanyActions component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<AdminPageCompanyActions />);
    });

    test("Then it should display 'Acción de empresas' inside a heading", () => {
      const titleText = /acción de empresas/i;

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'selecciona la acción que desees hacer a continuación'", () => {
      const instructionText =
        /Selecciona la acción que desees hacer a continuación/i;

      const instruction = screen.getByText(instructionText);

      expect(instruction).toBeInTheDocument();
    });

    test("Then it should display the actions 'Crear empresa', 'Modificar empresa', and 'Eliminar empresa'", () => {
      const createCompanyText = /crear empresa/i;
      const modifyCompanyText = /modificar empresa/i;
      const deleteCompanyText = /eliminar empresa/i;

      const createCompanyLink = screen.getByRole("link", {
        name: createCompanyText,
      });
      const modifyCompanyLink = screen.getByRole("link", {
        name: modifyCompanyText,
      });
      const deleteCompanyLink = screen.getByRole("link", {
        name: deleteCompanyText,
      });

      expect(createCompanyLink).toBeInTheDocument();
      expect(modifyCompanyLink).toBeInTheDocument();
      expect(deleteCompanyLink).toBeInTheDocument();
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
