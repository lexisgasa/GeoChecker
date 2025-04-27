import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import ModifyUserNewDataForm from "./ModifyUserNewDataForm";
import userEvent from "@testing-library/user-event";
import { UserFullData } from "../../types";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let setUserData: React.Dispatch<React.SetStateAction<UserFullData>>;

describe("Given the component ModifyUserNewDataForm", () => {
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

      return <ModifyUserNewDataForm userData={state} setUserData={setState} />;
    }

    renderWithRouter(<Wrapper />);
  });

  const nameLabelText = /nuevo nombre/i;
  const passwordLabelText = /nueva contraseña/i;
  const companyLabelText = /nueva empresa/i;

  describe("When it is rendered", () => {
    test("Then it should show the fields 'Nuevo nombre', 'Nueva contraseña' and 'Nueva empresa'", () => {
      const nameField = screen.getByLabelText(nameLabelText);
      const passwordField = screen.getByLabelText(passwordLabelText);
      const companyField = screen.getByLabelText(companyLabelText);

      expect(nameField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
      expect(companyField).toBeInTheDocument();
    });

    test("Then it should show the buttons with the text 'Modificar' and 'Volver'", () => {
      const updateButtonText = /modificar/i;
      const returnButtonText = /volver/i;

      const updateButton = screen.getByRole("button", {
        name: updateButtonText,
      });
      const returnButton = screen.getByRole("button", {
        name: returnButtonText,
      });

      expect(updateButton).toBeInTheDocument();
      expect(returnButton).toBeInTheDocument();
    });
  });

  describe("When the user types 'Alex' in 'Nombre' field", () => {
    test("Then it should display 'Alex' inside the field", async () => {
      const nameField = screen.getByLabelText(nameLabelText);

      await user.type(nameField, "Alex");

      expect(nameField).toHaveValue("Alex");
    });
  });

  describe("When the user types '123456' in 'Contraseña' field", () => {
    test("Then it should display '123456' inside the field", async () => {
      const passwordField = screen.getByLabelText(passwordLabelText);

      await user.type(passwordField, "123456");

      expect(passwordField).toHaveValue("123456");
    });
  });

  describe("When the user types 'Tech' in 'Empresa' field", () => {
    test("Then it should display 'Tech' inside the field", async () => {
      const companyField = screen.getByLabelText(companyLabelText);

      await user.type(companyField, "Tech");

      expect(companyField).toHaveValue("Tech");
    });
  });
});
