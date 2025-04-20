import { render, screen } from "@testing-library/react";
import WorkerPage from "./WorkerPage";

describe("Given the WorkerPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the actions 'Check in' and 'Check out' ", () => {
      const checkInText = /check in/i;
      const checkOutText = /check out/i;

      render(<WorkerPage />);

      const checkInAction = screen.getByRole("link", {
        name: checkInText,
      });
      const checkOutAction = screen.getByRole("link", {
        name: checkOutText,
      });

      expect(checkInAction).toBeInTheDocument();
      expect(checkOutAction).toBeInTheDocument();
    });
  });
});
