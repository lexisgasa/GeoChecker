import { render, screen } from "@testing-library/react";
import Actions from "./Actions";

describe("Given the Actions component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the button 'Check in'", () => {
      const checkInButtonText = /check in/i;

      render(<Actions name="Check in" path="/checkin" id={1} />);

      const checkInButton = screen.getByRole("link", {
        name: checkInButtonText,
      });

      expect(checkInButton).toBeInTheDocument();
    });
  });
});
