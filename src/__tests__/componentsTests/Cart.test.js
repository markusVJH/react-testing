import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Cart from "../../components/Cart"

const mockStore = configureStore([]);

describe("Cart initialisation: ", () => {
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
})