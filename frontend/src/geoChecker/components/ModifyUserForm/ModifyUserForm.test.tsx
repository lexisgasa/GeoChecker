import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import ModifyUserForm from "./ModifyUserForm";
import userEvent from "@testing-library/user-event";
import { IdUserData } from "../../types";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let setUserData: React.Dispatch<React.SetStateAction<IdUserData>>;

describe("Given the component ModifyUserForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();

    function Wrapper() {
      const [state, setState] = useState<IdUserData>({
        userId: "0",
      });

      setUserData = setState;

      return <ModifyUserForm userData={state} setUserData={setState} />;
    }

    renderWithRouter(<Wrapper />);
  });

  const userIdFieldText = /id/i;

  describe("When it is rendered", () => {
    test("Then it should show the field 'id'", () => {
      const userIdField = screen.getByLabelText(userIdFieldText);

      expect(userIdField).toBeInTheDocument();
    });

    test("Then it should show the buttons with the text 'Modificar' and 'Volver'", () => {
      const modifyButtonText = /modificar/i;
      const returnButtonText = /volver/i;

      const modifyButton = screen.getByRole("button", {
        name: modifyButtonText,
      });
      const returnButton = screen.getByRole("button", {
        name: returnButtonText,
      });

      expect(modifyButton).toBeInTheDocument();
      expect(returnButton).toBeInTheDocument();
    });
  });

  describe("When the user types the user ID 'User123' in 'id' field", () => {
    test("Then it should display 'User123' in the field", async () => {
      const userIdField = screen.getByLabelText(userIdFieldText);

      await user.type(userIdField, "123");

      expect(userIdField).toHaveValue(123);
    });
  });
});
