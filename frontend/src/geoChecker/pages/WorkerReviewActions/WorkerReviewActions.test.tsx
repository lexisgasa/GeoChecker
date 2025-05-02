import { screen } from "@testing-library/react";
import WorkerReviewActions from "./WorkerReviewActions";
import { renderWithRouter } from "../../../render-utils";

describe("Given the WorkerReviewActions component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<WorkerReviewActions />);
    });

    test("Then it should show the text 'Acciones de revisión' inside a heading", () => {
      const headingText = /acciones de revisión/i;

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'selecciona la acción que desees hacer a continuación'", () => {
      const instructionText =
        /selecciona la acción que desees hacer a continuación/i;

      const instruction = screen.getByText(instructionText);

      expect(instruction).toBeInTheDocument();
    });

    test("Then it should display the actions 'Registro mensual', 'Detalle de registro', and 'Revisión'", () => {
      const monthlyHistoryActionText = /registro mensual/i;
      const detailHistoryActionText = /detalle de registro/i;
      const reviewActionText = /revisión/i;

      const monthlyHistoryAction = screen.getByRole("link", {
        name: monthlyHistoryActionText,
      });
      const detailHistoryAction = screen.getByRole("link", {
        name: detailHistoryActionText,
      });
      const reviewAction = screen.getByRole("link", {
        name: reviewActionText,
      });

      expect(monthlyHistoryAction).toBeInTheDocument();
      expect(detailHistoryAction).toBeInTheDocument();
      expect(reviewAction).toBeInTheDocument();
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
