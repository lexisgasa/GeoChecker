import CreateUser from "./CreateUser";
import { renderWithRouter } from "../../../render-utils";
import { screen } from "@testing-library/react";

describe("Given the CreateUser component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<CreateUser />);
    });

    test("Then it should show a heading with the text 'Crear usuario'", () => {
      const headingText = /crear usuario/i;

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Introduce los siguientes datos para registrar tu cuenta'", () => {
      const paragraphText =
        /introduce los siguientes datos para registrar tu cuenta/i;

      const paragraph = screen.getByText(paragraphText);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
