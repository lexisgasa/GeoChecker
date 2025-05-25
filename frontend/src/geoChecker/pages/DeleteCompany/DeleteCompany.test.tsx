import DeleteCompany from "./DeleteCompany";
import { renderWithRouter } from "../../../render-utils";
import { screen } from "@testing-library/react";

describe("Given the DeleteCompany component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<DeleteCompany />);
    });

    test("Then it should show a heading with the text 'Borrar empresa'", () => {
      const headingText = /borrar empresa/i;

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Introduce el número de identificación de la empresa'", () => {
      const paragraphText =
        /introduce el número de identificación de la empresa/i;

      const paragraph = screen.getByText(paragraphText);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
