import { screen } from "@testing-library/react";
import CheckInConfirmation from "./CheckInConfirmation";
import { renderWithRouter } from "../../../render-utils";

describe("Given the CheckInConfirmation component", () => {
  beforeEach(() => {
    renderWithRouter(<CheckInConfirmation />);
  });

  describe("When it is rendered", () => {
    test("Then it should display 'Check in' as a heading", () => {
      const headingText = /check in/i;

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the text 'se ha registrado la hora de entrada a las'", () => {
      const confirmationText = /se ha registrado la hora de entrada a las/i;

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
