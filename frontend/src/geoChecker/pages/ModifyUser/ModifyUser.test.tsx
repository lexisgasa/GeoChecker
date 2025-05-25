import ModifyUser from "./ModifyUser";
import { renderWithRouter } from "../../../render-utils";
import { screen } from "@testing-library/react";

describe("Given the ModifyUser component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<ModifyUser />);
    });

    test("Then it should show a heading with the text 'Modificar Usuario'", () => {
      const headingText = /modificar usuario/i;

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
