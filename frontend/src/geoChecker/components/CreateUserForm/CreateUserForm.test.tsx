import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import CreateUserForm from "./CreateUserForm";
import userEvent from "@testing-library/user-event";
import { UserFullData } from "../../types";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let setUserData: React.Dispatch<React.SetStateAction<UserFullData>>;

describe("Given the component CreateUserForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();

    function Wrapper() {
      const [state, setState] = useState<UserFullData>({
        company: "",
        name: "",
        password: "",
      });

      setUserData = setState;

      return <CreateUserForm userData={state} setUserData={setState} />;
    }

    renderWithRouter(<Wrapper />);
  });

  describe("When it is rendered", () => {
    test("Then it should show the fields 'Empresa', 'Nombre' and 'Contraseña'", () => {
      const companyFieldText = screen.getByLabelText(/introduce la empresa/i);
      const nameFieldText = screen.getByLabelText(/introduce el nombre/i);
      const passwordFieldText = screen.getByLabelText(
        /introduce la contraseña/i
      );

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

  describe("When the user types 'Tech' in 'Introduce la empresa' field", () => {
    test("Then it should display 'Tech' inside the field", async () => {
      const companyFieldText = /introduce la empresa/i;

      const companyField = screen.getByLabelText(companyFieldText);

      await user.type(companyField, "Tech");

      expect(companyField).toHaveValue("Tech");
    });
  });

  describe("When the user types 'Alex' in 'Introduce el nombre' field", () => {
    test("Then it should display 'Alex' inside the field", async () => {
      const nameFieldText = /introduce el nombre/i;

      const nameField = screen.getByLabelText(nameFieldText);

      await user.type(nameField, "Alex");

      expect(nameField).toHaveValue("Alex");
    });
  });

  describe("When the user types 'Contraseña123' in 'Introduce la contraseña' field", () => {
    test("Then it should display 'Contraseña123' inside the field", async () => {
      const passwordFieldText = /introduce la contraseña/i;

      const passwordField = screen.getByLabelText(passwordFieldText);

      await user.type(passwordField, "Contraseña123");

      expect(passwordField).toHaveValue("Contraseña123");
    });
  });

  describe("When the user clicks the show/hide password button", () => {
    test("Then it should toggle the password field visibility", async () => {
      const passwordFieldText = /introduce la contraseña/i;
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
