import ModifyCompanyNewData from "./ModifyCompanyNewData";
import { renderWithRouter } from "../../../render-utils";
import { screen } from "@testing-library/react";

describe("Given the ModifyCompanyNewData component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      renderWithRouter(<ModifyCompanyNewData />);
    });

    test("Then it should show a heading with the text 'Modificar empresa'", () => {
      const headingText = /modificar empresa/i;

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Introduce los nuevos datos'", () => {
      const paragraphText = /introduce los nuevos datos/i;

      const paragraph = screen.getByText(paragraphText);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
