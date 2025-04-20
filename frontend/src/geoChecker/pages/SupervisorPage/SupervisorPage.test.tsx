import { render, screen } from "@testing-library/react";
import SupervisorPage from "./SupervisorPage";

describe("Given the WorkerPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the action 'Consulta por trabajador'", () => {
      const workerReview = /consulta por trabajador/i;

      render(<SupervisorPage />);

      const workerReviewAction = screen.getByRole("link", {
        name: workerReview,
      });

      expect(workerReviewAction).toBeInTheDocument();
    });
  });
});
