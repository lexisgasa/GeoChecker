import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../render-utils";
import DeleteCompanyForm from "./DeleteCompanyForm";
import userEvent from "@testing-library/user-event";
import { ModifyCompanyData } from "../../types";
import { useState } from "react";

describe("Given the component DeleteCompanyForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();

    function Wrapper() {
      const [state, setState] = useState<ModifyCompanyData>({
        companyId: "",
      });

      return (
        <DeleteCompanyForm companyData={state} setCompanyData={setState} />
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
      const companyIdField = screen.getByLabelText(companyIdFieldText);

      await user.type(companyIdField, "123");

      expect(companyIdField).toHaveValue(123);
    });
  });
});
