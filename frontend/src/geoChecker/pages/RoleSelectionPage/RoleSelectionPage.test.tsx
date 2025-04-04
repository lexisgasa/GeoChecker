import { screen } from "@testing-library/react";
import RoleSelectionPage from "./RoleSelectionPage";
import { renderWithRouter } from "../../../test-utils";

describe("Given the Main component", () => {
  describe("When it is rendered", () => {
    test("Then it should display 'bienvenido' inside a link", () => {
      const titleText = /bienvenido/i;

      renderWithRouter(<RoleSelectionPage />);

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });
  });
});
