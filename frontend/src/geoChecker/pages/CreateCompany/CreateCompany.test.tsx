import CreateCompany from "./CreateCompany";
import { renderWithRouter } from "../../../render-utils";
import { screen } from "@testing-library/react";

describe("Given the CreateCompany component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<CreateCompany />);
    });

    test("Then it should show a heading with the text 'Crear empresa'", () => {
      const headingText = /crear empresa/i;

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Introduce los siguientes datos para registrar la empresa'", () => {
      const paragraphText =
        /introduce los siguientes datos para registrar la empresa/i;

      const paragraph = screen.getByText(paragraphText);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
