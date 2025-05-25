import ContactPage from "./ContactPage";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";

describe("Given the ContactPage component", () => {
  describe("When it is renderded", () => {
    beforeEach(() => {
      renderWithRouter(<ContactPage />);
    });

    test("Then it should show the heading 'Contactar Administrador'", () => {
      const headingText = /contactar administrador/i;

      const contactHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(contactHeading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Si estás teniendo problemas para acceder al sistema, por favor contacta al administrador:'", () => {
      const paragraphText =
        /si estás teniendo problemas para acceder al sistema, por favor contacta al administrador/i;

      const paragraph = screen.getByText(paragraphText);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
