import { act, fireEvent, render, screen } from "@testing-library/react";
import Restaurant from "../src/components/RestaurantDetails/Restaurant";
import Header from "../src/components/Header";
import Cart from "../src/components/Cart";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <Restaurant />
      </Provider>
    )
  );
  const menuItem = screen.getAllByText("Choley Bhature"); //since there are multiple chole bhature
  expect(menuItem.length).toBeGreaterThan(1);
});

it("Should add item to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Restaurant />
        </Provider>
      </BrowserRouter>
    )
  );
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart 1")).toBeInTheDocument();
});

it("Should clear item from cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Restaurant />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const clearCartBtn = screen.getByRole("button", { name: "Clear cart" }); //if clear cart button is there means items are added in cart
  fireEvent.click(clearCartBtn);
  expect(screen.getByText("No Items in Cart")).toBeInTheDocument();
});
