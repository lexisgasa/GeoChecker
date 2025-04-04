import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export function renderWithRouter(ui: React.ReactElement) {
  return render(ui, { wrapper: MemoryRouter });
}
