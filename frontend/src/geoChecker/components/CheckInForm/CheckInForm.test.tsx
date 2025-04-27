import { screen } from "@testing-library/dom";
import { renderWithRouter } from "../../../render-utils";
import CheckInForm from "./CheckInForm";
import userEvent from "@testing-library/user-event";

describe("Given the component CheckInForm", () => {
  beforeEach(() => {
    renderWithRouter(<CheckInForm />);
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
  });

  test("Then it should show the buttons with the text 'Check in' and 'Volver'", () => {
    const sendButtonText = /check in/i;
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

  describe("When the user types '10:30' in 'Hora de entrada' field", () => {
    test("Then it should show the time '10:30' inside the field", async () => {
      const entryTime = screen.getByLabelText(entryTimeText);

      await user.type(entryTime, "10:30");

      expect(entryTime).toHaveValue("10:30");
    });
  });

  describe("When the user types 'Me encontraba mal' in 'Comentario' field", () => {
    test("Then it should show the text 'Me encontraba mal' inside the field", async () => {
      const comment = screen.getByLabelText(commentText);

      await user.type(comment, "Me encontraba mal");

      expect(comment).toHaveValue("Me encontraba mal");
    });
  });
});
