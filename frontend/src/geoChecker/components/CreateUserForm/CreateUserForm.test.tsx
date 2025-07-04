import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import CreateUserForm from "./CreateUserForm";
import userEvent from "@testing-library/user-event";
import { UserFullData } from "../../types";
import { useState } from "react";

describe("Given the component CreateUserForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();

    function Wrapper() {
      const mockOnSubmit = vi.fn();

      const [state, setState] = useState<UserFullData>({
        company: "",
        name: "",
        password: "",
      });

      return (
        <CreateUserForm
          userData={state}
          setUserData={setState}
          onSubmit={mockOnSubmit}
        />
      );
    }

    renderWithRouter(<Wrapper />);
  });

  describe("When it is rendered", () => {
    test("Then it should show the fields 'Nombre de empresa', 'Nombre de usuario' and 'Contraseña'", () => {
      const companyFieldText = screen.getByLabelText(/nombre de empresa/i);
      const nameFieldText = screen.getByLabelText(/nombre de usuario/i);
      const passwordFieldText = screen.getByLabelText(/Contraseña/i);

      expect(companyFieldText).toBeInTheDocument();
      expect(nameFieldText).toBeInTheDocument();
      expect(passwordFieldText).toBeInTheDocument();
    });

    test("Then it should show the buttons with the text 'Crear' and 'Volver'", () => {
      const createButtonText = /crear/i;
      const returnButtonText = /volver/i;

      const createButton = screen.getByRole("button", {
        name: createButtonText,
      });
      const returnButton = screen.getByRole("button", {
        name: returnButtonText,
      });

      expect(createButton).toBeInTheDocument();
      expect(returnButton).toBeInTheDocument();
    });
  });

  describe("When the user types 'Tech' in 'Nombre de empresa' field", () => {
    test("Then it should display 'Tech' inside the field", async () => {
      const companyFieldText = /nombre de empresa/i;

      const companyField = screen.getByLabelText(companyFieldText);

      await user.type(companyField, "Tech");

      expect(companyField).toHaveValue("Tech");
    });
  });

  describe("When the user types 'Alex' in 'Nombre de usuario' field", () => {
    test("Then it should display 'Alex' inside the field", async () => {
      const nameFieldText = /nombre de usuario/i;

      const nameField = screen.getByLabelText(nameFieldText);

      await user.type(nameField, "Alex");

      expect(nameField).toHaveValue("Alex");
    });
  });

  describe("When the user types 'Contraseña123' in 'Contraseña' field", () => {
    test("Then it should display 'Contraseña123' inside the field", async () => {
      const passwordFieldText = /contraseña/i;

      const passwordField = screen.getByLabelText(passwordFieldText);

      await user.type(passwordField, "Contraseña123");

      expect(passwordField).toHaveValue("Contraseña123");
    });
  });

  describe("When the user clicks the show/hide password button", () => {
    test("Then it should toggle the password field visibility", async () => {
      const passwordFieldText = /contraseña/i;
      const toggleButtonText = /show password/i;

      const passwordField = screen.getByLabelText(passwordFieldText);
      const toggleButton = screen.getByRole("button", {
        name: toggleButtonText,
      });

      expect(passwordField).toHaveAttribute("type", "password");

      await user.click(toggleButton);

      expect(passwordField).toHaveAttribute("type", "text");

      await user.click(toggleButton);

      expect(passwordField).toHaveAttribute("type", "password");
    });
  });
});
