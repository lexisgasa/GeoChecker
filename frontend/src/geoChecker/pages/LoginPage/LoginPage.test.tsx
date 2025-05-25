import LoginPage from "./LoginPage";
import { renderWithRouter } from "../../../render-utils";
import { screen } from "@testing-library/react";

describe("Given the LoginPage component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<LoginPage />);
    });

    test("Then it should show a heading with the text 'Inicio de sesión'", () => {
      const headingText = /inicio de sesión/i;

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Introduce tus datos de usuario'", () => {
      const paragraphText = /introduce tus datos de usuario/i;

      const paragraph = screen.getByText(paragraphText);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
