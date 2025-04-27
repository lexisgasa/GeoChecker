import { screen } from "@testing-library/react";
import CheckOutConfirmation from "./CheckOutConfirmation";
import { renderWithRouter } from "../../../render-utils";

describe("Given the CheckOutConfirmation component", () => {
  beforeEach(() => {
    renderWithRouter(<CheckOutConfirmation />);
  });

  describe("When it is rendered", () => {
    test("Then it should display 'Check out' as a heading", () => {
      const headingText = /check out/i;

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the text 'se ha registrado la hora de salida a las'", () => {
      const confirmationText = /se ha registrado la hora de salida a las/i;

      const confirmationMessage = screen.getByText(confirmationText);

      expect(confirmationMessage).toBeInTheDocument();
    });

    test("Then it should display the return button", () => {
      const buttonText = /volver/i;

      const returnButton = screen.getByRole("button", { name: buttonText });

      expect(returnButton).toBeInTheDocument();
    });
  });
});
