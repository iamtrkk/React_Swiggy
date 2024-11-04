import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/Header";
import appStore from "../store/appStore";
import "@testing-library/jest-dom";

it("Should render Header comoponent with a login button", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //query
  const loginButton = screen.getByRole("button", { name: "login" });

  //assert
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header comoponent with a cart items 0", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const cartItems = screen.getByText("Cart 0");
  //using regex where we dont need to write exact string of cart
  const cartItems = screen.getByText(/Cart/);
  //assert
  expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "login" });
  fireEvent.click(loginButton);
  const logOutButton = screen.getByRole("button", { name: "logout" });
  expect(logOutButton).toBeInTheDocument();
});
