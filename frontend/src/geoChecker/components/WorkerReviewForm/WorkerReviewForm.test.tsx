import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import WorkerReview from "../../pages/WorkerReview/WorkerReview";

describe("Given the WorkerReview component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<WorkerReview />);
    });

    test("Then it should show a heading with the text 'Consulta por trabajador'", () => {
      const heading = screen.getByRole("heading", {
        name: /consulta por trabajador/i,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Introduce el número de identificación del trabajador'", () => {
      const instruction = screen.getByText(
        /introduce el número de identificación del trabajador/i
      );

      expect(instruction).toBeInTheDocument();
    });

    test("Then it should show an input label with the text 'ID del trabajador'", () => {
      const userIdInput = screen.getByLabelText(/id del trabajador/i);

      expect(userIdInput).toBeInTheDocument();
    });

    test("Then it should show the buttons with the text 'Consultar' and 'Volver'", () => {
      const submitButton = screen.getByRole("button", { name: /consultar/i });
      const returnButton = screen.getByRole("button", { name: /volver/i });

      expect(submitButton).toBeInTheDocument();
      expect(returnButton).toBeInTheDocument();
    });
  });
});
