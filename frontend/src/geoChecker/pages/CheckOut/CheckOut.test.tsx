import CheckOut from "./CheckOut";
import { renderWithRouter } from "../../../render-utils";
import { screen } from "@testing-library/react";

describe("Given the CheckOut component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<CheckOut />);
    });

    test("Then it should show a heading with the text 'Check out'", () => {
      const headingTitle = /check out/i;

      const heading = screen.getByRole("heading", {
        name: headingTitle,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Registra la hora de salida, si lo consideras necesario puedes escribir un comentario'", () => {
      const paragraphText =
        /Registra la hora de salida, si lo consideras necesario puedes escribir un comentario/i;

      const paragraph = screen.getByText(paragraphText);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
