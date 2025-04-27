import { screen } from "@testing-library/dom";
import { renderWithRouter } from "../../../render-utils";
import ContactPageForm from "./ContactPageForm";
import userEvent from "@testing-library/user-event";

describe("Given the component ContactPageForm", () => {
  beforeEach(() => {
    renderWithRouter(<ContactPageForm />);
  });

  const user = userEvent.setup();
  const userLabelText = /usuario/i;
  const descriptionLabelText = /descripción del problema/i;

  describe("When it is rendered", () => {
    test("Then it should show the fields 'Usuario' and 'Descripción del problema'", () => {
      const userLabel = screen.getByLabelText(userLabelText);
      const descriptionLabel = screen.getByLabelText(descriptionLabelText);

      expect(userLabel).toBeInTheDocument();
      expect(descriptionLabel).toBeInTheDocument();
    });
  });

  describe("When the user types 'Alex' in 'Usuario' field", () => {
    test("Then it should show the word 'Alex' inside the field", async () => {
      const userLabel = screen.getByLabelText(userLabelText);

      await user.type(userLabel, "Alex");

      expect(userLabel).toHaveValue("Alex");
    });
  });

  describe("When the user types 'Ha habido un problema con el login' in 'Descripción del problema' field", () => {
    test("Then it should show the text 'Ha habido un problema con el login' inside the field", async () => {
      const descriptionLabel = screen.getByLabelText(descriptionLabelText);

      await user.type(descriptionLabel, "Ha habido un problema con el login");

      expect(descriptionLabel).toHaveValue(
        "Ha habido un problema con el login"
      );
    });
  });
});
