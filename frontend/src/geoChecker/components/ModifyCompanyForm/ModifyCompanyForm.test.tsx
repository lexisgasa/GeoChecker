import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import ModifyCompanyForm from "./ModifyCompanyForm";
import userEvent from "@testing-library/user-event";
import { ModifyCompanyData } from "../../types";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let setCompanyData: React.Dispatch<React.SetStateAction<ModifyCompanyData>>;

describe("Given the component ModifyCompanyForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();

    function Wrapper() {
      const [state, setState] = useState<ModifyCompanyData>({
        companyId: "",
      });

      setCompanyData = setState;

      return (
        <ModifyCompanyForm companyData={state} setCompanyData={setState} />
      );
    }

    renderWithRouter(<Wrapper />);
  });

  const companyIdFieldText = /id/i;

  describe("When it is rendered", () => {
    test("Then it should show the field 'ID'", () => {
      const companyIdField = screen.getByLabelText(companyIdFieldText);

      expect(companyIdField).toBeInTheDocument();
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

  describe("When the user types '123' in the 'ID' field", () => {
    test("Then it should display '123' in the field", async () => {
      const companyIdField = screen.getByLabelText(companyIdFieldText);

      await user.type(companyIdField, "123");

      expect(companyIdField).toHaveValue(123);
    });
  });
});
