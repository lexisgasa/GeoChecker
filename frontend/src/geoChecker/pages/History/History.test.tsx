import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import History from "./History";

describe("Given the History component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<History />);
    });

    test("Then it should show a heading with the text 'Consulta de registro'", () => {
      const historyHeadingText = /consulta de registro/i;

      const historyHeading = screen.getByRole("heading", {
        name: historyHeadingText,
      });

      expect(historyHeading).toBeInTheDocument();
    });

    test("Then it should show the actions 'Registro mensual' and 'Detalle de registro'", () => {
      const monthlyRecordAction = screen.getByRole("link", {
        name: /registro mensual/i,
      });
      const recordDetailAction = screen.getByRole("link", {
        name: /detalle de registro/i,
      });

      expect(monthlyRecordAction).toBeInTheDocument();
      expect(recordDetailAction).toBeInTheDocument();
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
