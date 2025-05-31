import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import CreateCompanyForm from "./CreateCompanyForm";
import userEvent from "@testing-library/user-event";
import { CompanyData } from "../../types";
import { useState } from "react";

describe("Given the component CreateCompanyForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();

    function Wrapper() {
      const [state, setState] = useState<CompanyData>({
        name: "",
      });

      return (
        <CreateCompanyForm companyData={state} setCompanyData={setState} />
      );
    }

    renderWithRouter(<Wrapper />);
  });

  describe("When it is rendered", () => {
    test("Then it should show the field 'Introduce el nombre de empresa'", () => {
      const companyFieldText = /introduce el nombre de empresa/i;

      const companyField = screen.getByLabelText(companyFieldText);

      expect(companyField).toBeInTheDocument();
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

  describe("When the user types 'Tech' in 'Introduce el nombre de empresa' field", () => {
    test("Then it should display 'Tech' inside the field", async () => {
      const companyFieldText = /introduce el nombre de empresa/i;

      const companyField = screen.getByLabelText(companyFieldText);

      await user.type(companyField, "Tech");

      expect(companyField).toHaveValue("Tech");
    });
  });
});
