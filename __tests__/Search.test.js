const { render, act, screen, fireEvent } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import Body from "../src/components/Body/Body";
import MOCK_DATA from "../mocks/resListMock.json";

//Creating fetch function async call mock because fetch runs inside
//Browser and in jest-dom its not provided so we have to define the mock fetch function
//which is async and return mock data

global.fetch = jest.fn(() => {
  //faking an api call
  // async promise resolve and return json
  return Promise.resolve({
    json: () => {
      //since res.json() is also a async call
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Serach Res List for kfc", async () => {
  await act(async () =>
    // act is used to simulate async call
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchInput = screen.getByTestId("searchInput"); //add data-testid = 'searchInput' in <input tag in component
  fireEvent.change(searchInput, { target: { value: "kfc" } });
  const cardsAfterSearch = screen.getAllByTestId("resCard"); // add id in restaurant card component
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const topRatedBtn = screen.getByRole("button", { name: "Top Restaurants" });
  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(26);
});
