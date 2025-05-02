import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import DetailHistory from "./DetailHistory";

describe("Given the DetailHistory component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<DetailHistory />);
    });

    test("Then it should show a heading with the text 'Detalle de registro'", () => {
      const headingText = /detalle de registro/i;

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Selecciona la fecha que deseas consultar'", () => {
      const descriptionText = /selecciona la fecha que deseas consultar/i;

      const description = screen.getByText(descriptionText);

      expect(description).toBeInTheDocument();
    });

    test("Then it should show the form with fields 'Desde' and 'Hasta'", () => {
      const startDateText = /desde/i;
      const endDateText = /hasta/i;

      const startDate = screen.getByLabelText(startDateText);
      const endDate = screen.getByLabelText(endDateText);

      expect(startDate).toBeInTheDocument();
      expect(endDate).toBeInTheDocument();
    });

    test("Then it should show the buttons 'Visualizar' and 'Volver'", () => {
      const viewButtonText = /visualizar/i;
      const returnButtonText = /volver/i;

      const viewButton = screen.getByRole("button", { name: viewButtonText });
      const returnButton = screen.getByRole("button", {
        name: returnButtonText,
      });

      expect(viewButton).toBeInTheDocument();
      expect(returnButton).toBeInTheDocument();
    });
  });
});
