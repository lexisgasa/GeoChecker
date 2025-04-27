import { screen } from "@testing-library/dom";
import { renderWithRouter } from "../../../render-utils";
import Review from "./Review";

describe("Given the component Review", () => {
  beforeEach(() => {
    renderWithRouter(<Review />);
  });

  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Enviar revisión'", () => {
      const reviewHeadingText = /enviar revisión/i;

      const reviewHeading = screen.getByRole("heading", {
        name: reviewHeadingText,
      });

      expect(reviewHeading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Si ha habido algún error o deseas hacer una corrección del tiempo'", () => {
      const paragraphReviewText =
        /si ha habido algún error o deseas hacer una corrección del tiempo/i;

      const paragraphReview = screen.getByText(paragraphReviewText);

      expect(paragraphReview).toBeInTheDocument();
    });
  });
});
