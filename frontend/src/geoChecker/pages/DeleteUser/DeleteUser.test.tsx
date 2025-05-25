import DeleteUser from "./DeleteUser";
import { renderWithRouter } from "../../../render-utils";
import { screen } from "@testing-library/react";

describe("Given the DeleteUser component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<DeleteUser />);
    });

    test("Then it should show a heading with the text 'Borrar Usuario'", () => {
      const headingText = /borrar usuario/i;

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Introduce el número de identificación del usuario'", () => {
      const paragraphText =
        /introduce el número de identificación del usuario/i;

      const paragraph = screen.getByText(paragraphText);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
