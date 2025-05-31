import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import ModifyCompanyNewDataForm from "./ModifyCompanyNewDataForm";
import userEvent from "@testing-library/user-event";
import { CompanyData } from "../../types";
import { useState } from "react";

describe("Given the component ModifyCompanyNewDataForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();

    function Wrapper() {
      const [state, setState] = useState<CompanyData>({
        name: "",
      });

      return (
        <ModifyCompanyNewDataForm
          companyData={state}
          setCompanyData={setState}
        />
      );
    }

    renderWithRouter(<Wrapper />);
  });

  const nameFieldText = /nombre/i;

  describe("When it is rendered", () => {
    test("Then it should show the field 'Nombre'", () => {
      const nameField = screen.getByLabelText(nameFieldText);

      expect(nameField).toBeInTheDocument();
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

  describe("When the user types 'Tech' in 'Nombre' field", () => {
    test("Then it should display 'Tech' inside the field", async () => {
      const nameField = screen.getByLabelText(nameFieldText);

      await user.type(nameField, "Tech");

      expect(nameField).toHaveValue("Tech");
    });
  });
});
