import { render, screen } from "@testing-library/react";
import RatingStars from "../../components/RatingStars";

describe("RatingStars", () => {
  const rating = {
    rate: 3.9,
    count: 10,
  }
  const rating2 = {
    rate: 4.5,
    count: 120,
  };

  render(
    <>
    <RatingStars rating={rating} />
    <RatingStars rating={rating2} />
    </>
    );
  it("Testing if renders rating stars correctly", () => {


      const fullStars = screen.getAllByTestId("full-star");
      expect(fullStars).toHaveLength(7);

      const halfStar = screen.getAllByTestId("half-star");
      expect(halfStar).toHaveLength(2);

      const emptyStars = screen.getAllByTestId("empty-star");
      expect(emptyStars).toHaveLength(1);
  

    });

    it("renders the correct count number", () => {
      render(
        <>
        <RatingStars rating={rating} />
        <RatingStars rating={rating2} />
        </>
        );
      const countElements = screen.getAllByTestId("count");
      expect(countElements[0]).toHaveTextContent("(10)");
      expect(countElements[1]).toHaveTextContent("(120)");
    });
  })