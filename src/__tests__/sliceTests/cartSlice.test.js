import cartReducer, { changeQuantity } from "../../features/cartSlice";

describe("cartSlice tests", () => {
  const initialState = {
    cart: []
  }
  it("Should return the initial state on the first run", () => {
    expect(cartReducer(undefined, {type: "unknown"})).toEqual(initialState)
  })

  it("should handle changeQuantity", () => {
    const product = { id: 1, name: "Product 1", price: 10, quantity: 1 };
    const state = {
      cart: [product],
    };
    const action = changeQuantity({ ...product, quantity: 2 });
    const expectedState = {
      cart: [{ ...product, quantity: 3 }],
    };
    expect(cartReducer(state, action)).toEqual(expectedState);
  });
})