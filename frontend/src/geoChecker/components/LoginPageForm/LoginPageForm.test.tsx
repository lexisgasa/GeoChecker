import { screen } from "@testing-library/react";
import LoginPageForm from "./LoginPageForm";
import { UserData } from "../../types";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../../render-utils";
import { useState } from "react";

describe("Given the LoginPageForm component", () => {
  const userFieldText = /usuario/i;
  const passwordFieldText = /contraseña/i;
  const logInButtonText = /iniciar sesión/i;
  const returnFieldText = /volver/i;
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();

    function Wrapper() {
      const [state, setState] = useState<UserData>({
        username: "",
        password: "",
      });

      return <LoginPageForm userData={state} setUserData={setState} />;
    }

    renderWithRouter(<Wrapper />);
  });

  describe("When it renders", () => {
    test("Then it should show the fields 'Usuario' and 'Contraseña' and the buttons with the text'Iniciar sesión' and 'Volver'", () => {
      const userField = screen.getByLabelText(userFieldText);
      const passwordField = screen.getByLabelText(passwordFieldText);

      expect(userField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
    });

    test("Then it should show the buttons with the text 'Iniciar sesión' and 'Volver'", () => {
      const loginButton = screen.getByRole("button", { name: logInButtonText });
      const returnField = screen.getByRole("button", { name: returnFieldText });

      expect(loginButton).toBeInTheDocument();
      expect(returnField).toBeInTheDocument();
    });
  });

  describe("When the user types 'Alex' in 'Usuario' field", () => {
    test("Then it should display 'Alex' inside the field", async () => {
      const userFieldInput = screen.getByLabelText(userFieldText);
      await user.type(userFieldInput, "Alex");

      expect(userFieldInput).toHaveValue("Alex");
    });
  });

  describe("When the user types 'Contraseña123' in 'Contraseña' field", () => {
    test("Then it should display 'Contraseña123' inside the field", async () => {
      const passwordFieldInput = screen.getByLabelText(passwordFieldText);

      await user.type(passwordFieldInput, "Contraseña123");

      expect(passwordFieldInput).toHaveValue("Contraseña123");
    });
  });
});
