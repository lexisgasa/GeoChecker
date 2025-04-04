import { screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { renderWithRouter } from "../../../render-utils";

describe("Given the NotFound component", () => {
  describe("When it is rendered", () => {
    test("Then it should display 'La página que buscas no existe..' inside a heading", () => {
      const notFoundHeadingText = /La página que buscas no existe../i;

      renderWithRouter(<NotFound />);

      const notFoundHeading = screen.getByRole("heading", {
        name: notFoundHeadingText,
      });

      expect(notFoundHeading).toBeInTheDocument();
    });
  });
});
