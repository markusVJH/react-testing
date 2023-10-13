import { render } from "@testing-library/react";
import RatingStars from "../../components/RatingStars";

describe("RatingStars", () => {
  it("Testing if renders rating stars correctly", () => {
    const rating = {
      rate: 4.5,
      count: 10,
    }
    const rating2 = {
      rate: 4.0,
      count: 10,
    };

    render(
      <>
      <RatingStars rating={rating} />
      <RatingStars rating={rating2} />
      </>
      );

    });
  })