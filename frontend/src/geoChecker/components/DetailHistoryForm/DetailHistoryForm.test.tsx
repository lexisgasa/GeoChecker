import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../../render-utils";
import DetailHistoryForm from "./DetailHistoryForm";

describe("Given the DetailHistoryForm component", () => {
  const startDateLabel = /desde/i;
  const endDateLabel = /hasta/i;
  const viewButtonText = /visualizar/i;
  const returnButtonText = /volver/i;
  const user = userEvent.setup();

  beforeEach(() => {
    renderWithRouter(<DetailHistoryForm />);
  });

  describe("When it renders", () => {
    test("Then it should show the date fields 'Desde' and 'Hasta'", () => {
      const startDateInput = screen.getByLabelText(startDateLabel);
      const endDateInput = screen.getByLabelText(endDateLabel);

      expect(startDateInput).toBeInTheDocument();
      expect(endDateInput).toBeInTheDocument();
    });

    test("Then it should show the buttons 'Visualizar' and 'Volver'", () => {
      const viewButton = screen.getByRole("button", { name: viewButtonText });
      const returnButton = screen.getByRole("button", {
        name: returnButtonText,
      });

      expect(viewButton).toBeInTheDocument();
      expect(returnButton).toBeInTheDocument();
    });
  });

  describe("When the user selects the date '2025-01-01' in the 'Desde' field", () => {
    test("Then it should show the date '2025-01-01' in the field", async () => {
      const startDateInput = screen.getByLabelText(startDateLabel);
      await user.type(startDateInput, "2025-01-01");

      expect(startDateInput).toHaveValue("2025-01-01");
    });
  });

  describe("When the user selects the date '2025-12-31' in the 'Hasta' field", () => {
    test("Then it should show the date '2025-12-31' in the field", async () => {
      const endDateInput = screen.getByLabelText(endDateLabel);
      await user.type(endDateInput, "2025-12-31");

      expect(endDateInput).toHaveValue("2025-12-31");
    });
  });
});
