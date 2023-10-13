import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Cart from "../../components/Cart"
import { cartItems } from "../../testData/cartData"

const mockStore = configureStore([]);

describe("Cart initialisation:", () => {
  it("test should pass", () => {
    expect(true).toBe(true)
  })

  it('Cart should be empty when it is empty', () => {
    const store = mockStore({
      cart: {
        cart: [],
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );
      
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  })

  it("should render a list of products in the cart", () => {

    const store = mockStore({
      cart: {
        cart: cartItems,
      },
    });

    console.log("CartItems: ", cartItems);

    render(
      <Provider store={store}>
         <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByTestId("product")).toHaveLength(2);
  });

})