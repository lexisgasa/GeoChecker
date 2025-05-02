import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import WorkerReview from "./WorkerReview";

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
      const input = screen.getByLabelText(/id del trabajador/i);

      expect(input).toBeInTheDocument();
    });

    test("Then it should show a 'Consultar' button and a 'Volver' button", () => {
      const consultButton = screen.getByRole("button", {
        name: /consultar/i,
      });
      const returnButton = screen.getByRole("button", {
        name: /volver/i,
      });

      expect(consultButton).toBeInTheDocument();
      expect(returnButton).toBeInTheDocument();
    });
  });
});
