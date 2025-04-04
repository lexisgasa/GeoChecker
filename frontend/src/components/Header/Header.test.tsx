import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithRouter } from "../../render-utils";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should display 'GeoChecker' inside a heading", () => {
      const titleText = /geochecker/i;

      renderWithRouter(<Header />);

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });
  });
});
