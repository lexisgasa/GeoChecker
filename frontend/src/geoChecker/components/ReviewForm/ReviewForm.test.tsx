import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../../render-utils";
import ReviewForm from "./ReviewForm";

describe("Given the component ReviewForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
    renderWithRouter(<ReviewForm />);
  });

  const dateLabelText = /elegir día/i;
  const entryTimeLabelText = /check in/i;
  const exitTimeLabelText = /check out/i;
  const commentLabelText = /comentario/i;

  describe("When it is rendered", () => {
    test("Then it should show the fields 'Elegir día', 'Check in', 'Check out' and 'Comentario'", () => {
      const dateField = screen.getByLabelText(dateLabelText);
      const entryTimeField = screen.getByLabelText(entryTimeLabelText);
      const exitTimeField = screen.getByLabelText(exitTimeLabelText);
      const commentField = screen.getByLabelText(commentLabelText);

      expect(dateField).toBeInTheDocument();
      expect(entryTimeField).toBeInTheDocument();
      expect(exitTimeField).toBeInTheDocument();
      expect(commentField).toBeInTheDocument();
    });

    test("Then it should show the buttons with the text 'Enviar revisión' and 'Volver'", () => {
      const submitButtonText = /enviar revisión/i;
      const returnButtonText = /volver/i;

      const submitButton = screen.getByRole("button", {
        name: submitButtonText,
      });
      const returnButton = screen.getByRole("button", {
        name: returnButtonText,
      });

      expect(submitButton).toBeInTheDocument();
      expect(returnButton).toBeInTheDocument();
    });
  });

  describe("When the user types the date '2024-04-26' in the 'Elegir día' field", () => {
    test("Then it should show the date '2024-04-06' inside the field", async () => {
      const dateField = screen.getByLabelText(dateLabelText);

      await user.type(dateField, "2024-04-26");

      expect(dateField).toHaveValue("2024-04-26");
    });
  });

  describe("When the user types the entry time '09:30' in the 'Check in' field", () => {
    test("Then it should show the entry time '09:30' in the field", async () => {
      const entryTimeField = screen.getByLabelText(entryTimeLabelText);

      await user.type(entryTimeField, "09:30");

      expect(entryTimeField).toHaveValue("09:30");
    });
  });

  describe("When the user types the exit time '18:00' in the 'Check out' field", () => {
    test("Then it should show the exit time '18:00' in the field", async () => {
      const exitTimeField = screen.getByLabelText(exitTimeLabelText);

      await user.type(exitTimeField, "18:00");

      expect(exitTimeField).toHaveValue("18:00");
    });
  });

  describe("When the user types a comment in the 'Me equivoqué a la hora de fichar' field", () => {
    test("Then it should show 'Me equivoqué a la hora de fichar' in the field", async () => {
      const commentField = screen.getByLabelText(commentLabelText);

      await user.type(commentField, "Me equivoqué a la hora de fichar");

      expect(commentField).toHaveValue("Me equivoqué a la hora de fichar");
    });
  });
});
