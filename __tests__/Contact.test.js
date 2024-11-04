import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

// describe basically groups the test cases
describe("Contact Us component Test Case", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    //Query
    const heading = screen.getAllByRole("heading");

    //Assertion
    expect(heading.length).toBe(2);
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  // We can also write it in place of test just an alias to test just for ease of reading
  it("Should load button text inside contact component", () => {
    render(<Contact />);
    const button = screen.getByText("submit");
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input field inside contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).not.toBe(3); // It has 2 input boxes so its !2
  });
});
