import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import DeleteUserForm from "./DeleteUserForm";
import userEvent from "@testing-library/user-event";
import { IdUserData } from "../../types";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let setUserData: React.Dispatch<React.SetStateAction<IdUserData>>;

describe("Given the component DeleteUserForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();

    function Wrapper() {
      const [state, setState] = useState<IdUserData>({
        userId: "",
      });

      setUserData = setState;

      return <DeleteUserForm userData={state} setUserData={setState} />;
    }

    renderWithRouter(<Wrapper />);
  });

  const userIdFieldText = /id/i;

  describe("When it is rendered", () => {
    test("Then it should show the field 'ID'", () => {
      const userIdField = screen.getByLabelText(userIdFieldText);

      expect(userIdField).toBeInTheDocument();
    });

    test("Then it should show the buttons with the text 'Borrar' and 'Volver'", () => {
      const deleteButtonText = /borrar/i;
      const returnButtonText = /volver/i;

      const deleteButton = screen.getByRole("button", {
        name: deleteButtonText,
      });
      const returnButton = screen.getByRole("button", {
        name: returnButtonText,
      });

      expect(deleteButton).toBeInTheDocument();
      expect(returnButton).toBeInTheDocument();
    });
  });

  describe("When the user types the ID '123' in 'ID' field", () => {
    test("Then it should display '123' in the field", async () => {
      const userIdField = screen.getByLabelText(userIdFieldText);

      await user.type(userIdField, "123");

      expect(userIdField).toHaveValue(123);
    });
  });
});
