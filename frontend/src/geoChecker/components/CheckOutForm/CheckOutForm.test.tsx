import { screen } from "@testing-library/dom";
import { renderWithRouter } from "../../../render-utils";
import CheckOutForm from "./CheckOutForm";
import userEvent from "@testing-library/user-event";

describe("Given the component CheckOutForm", () => {
  beforeEach(() => {
    renderWithRouter(<CheckOutForm />);
  });

  const user = userEvent.setup();
  const entryTimeText = /hora de entrada/i;
  const exitTimeText = /hora de salida/i;
  const commentText = /comentario/i;

  describe("When it is rendered", () => {
    test("Then it should show the fields 'Hora de entrada', 'Hora de salida' and 'Comentario'", () => {
      const entryTime = screen.getByLabelText(entryTimeText);
      const exitTime = screen.getByLabelText(exitTimeText);
      const comment = screen.getByLabelText(commentText);

      expect(entryTime).toBeInTheDocument();
      expect(exitTime).toBeInTheDocument();
      expect(comment).toBeInTheDocument();
    });

    test("Then it should show the buttons with the text 'Check out' and 'Volver'", () => {
      const sendButtonText = /check out/i;
      const returnButtonText = /volver/i;

      const sendButton = screen.getByRole("button", {
        name: sendButtonText,
      });
      const returnButton = screen.getByRole("button", {
        name: returnButtonText,
      });

      expect(sendButton).toBeInTheDocument();
      expect(returnButton).toBeInTheDocument();
    });

    test("Then the entry time field should be disabled", () => {
      const entryTime = screen.getByLabelText(entryTimeText);

      expect(entryTime).toBeDisabled();
    });
  });

  describe("When the user types '17:30' in 'Hora de salida' field", () => {
    test("Then it should show the time '17:30' inside the field", async () => {
      const exitTime = screen.getByLabelText(exitTimeText);

      await user.type(exitTime, "17:30");

      expect(exitTime).toHaveValue("17:30");
    });
  });

  describe("When the user types 'He terminado mi jornada' in 'Comentario' field", () => {
    test("Then it should show the text 'He terminado mi jornada' inside the field", async () => {
      const comment = screen.getByLabelText(commentText);

      await user.type(comment, "He terminado mi jornada");

      expect(comment).toHaveValue("He terminado mi jornada");
    });
  });
});
