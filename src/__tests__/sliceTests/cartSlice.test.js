import cartReducer, { changeQuantity } from "../../features/cartSlice";

describe("cartSlice tests", () => {
  const initialState = {
    cart: []
  }
  it("Should return the initial state on the first run", () => {
    expect(cartReducer(undefined, {type: "unknown"})).toEqual(initialState)
  })

  it("should handle changeQuantity", () => {
    const product = { id: 1, name: "Product 1", price: 5, quantity: 1 };
    const state = {
      cart: [product],
    };
    const action = changeQuantity({ ...product, quantity: 2 });
    const expectedState = {
      cart: [{ ...product, quantity: 3 }],
    };
    expect(cartReducer(state, action)).toEqual(expectedState);
  });

  it("should handle adding product", () => {
    const product = { id: 1, name: "Product 1", price: 5, quantity: 1 };
    const state = {
      cart: [],
    };
    const action = changeQuantity(product);
    const expectedState = {
      cart: [product],
    };
    expect(cartReducer(state, action)).toEqual(expectedState);
  });

  it("should handle removing product", () => {
    const product = { id: 1, name: "Product 1", price: 5, quantity: 0 };
    const state = {
      cart: [product],
    };
    const action = changeQuantity({ ...product, quantity: -1 });
    const expectedState = {
      cart: [],
    };
    expect(cartReducer(state, action)).toEqual(expectedState);
  });

})