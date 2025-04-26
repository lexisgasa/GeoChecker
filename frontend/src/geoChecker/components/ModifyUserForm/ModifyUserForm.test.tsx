import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import ModifyUserForm from "./ModifyUserForm";
import userEvent from "@testing-library/user-event";
import { ModifyUserData } from "../../types";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let setUserData: React.Dispatch<React.SetStateAction<ModifyUserData>>;

describe("Given the component ModifyUserForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();

    function Wrapper() {
      const [state, setState] = useState<ModifyUserData>({
        userId: "0",
      });

      setUserData = setState;

      return <ModifyUserForm userData={state} setUserData={setState} />;
    }

    renderWithRouter(<Wrapper />);
  });

  const userIdFieldText = /introduce el id de usuario/i;

  describe("When it is rendered", () => {
    test("Then it should show the field 'Introduce el id de usuario'", () => {
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

  describe("When the user types the user ID 'User123' in 'Introduce el id de usuario' field", () => {
    test("Then it should display 'User123' in the field", async () => {
      const userIdField = screen.getByLabelText(userIdFieldText);

      await user.type(userIdField, "123");

      expect(userIdField).toHaveValue(123);
    });
  });
});
