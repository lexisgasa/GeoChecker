import { screen } from "@testing-library/react";
import ContactPage from "./ContactPage";
import { renderWithRouter } from "../../../render-utils";

describe("Given the ContactPage component", () => {
  describe("When it is renderded", () => {
    test("Then it should show the heading 'Contactar Administrador'", () => {
      renderWithRouter(<ContactPage />);
      const headingText = /contactar administrador/i;

      const contactHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(contactHeading).toBeInTheDocument();
    });
  });
});
