import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("Test if clear button has been render", () => {
  render(<App />);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});

test("Test functionality of clear button", () => {
  render(<App />);
  userEvent.click(screen.getByRole("button"));
  const input = screen.getByPlaceholderText("type-something");
  expect(input.value).toBe("");
});

test("Test for first single uppercase character", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("type-something");
  fireEvent.change(input, { target: { value: "A" } });
  const sum = screen.getByTestId("sum");
  expect(sum.textContent).toBe("1");
});

test("Test for last single uppercase character", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("type-something");
  fireEvent.change(input, { target: { value: "Z" } });
  const sum = screen.getByTestId("sum");
  expect(sum.textContent).toBe("26");
});

test("Test for mixed uppercase and lowercase characters", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("type-something");
  fireEvent.change(input, { target: { value: "Az" } });
  const sum = screen.getByTestId("sum");
  expect(sum.textContent).toBe("27");
});

test("Test for full word", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("type-something");
  fireEvent.change(input, { target: { value: "Test" } });
  const sum = screen.getByTestId("sum");
  expect(sum.textContent).toBe("64");
});

test("Test empty string", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("type-something");
  fireEvent.change(input, { target: { value: "Te st" } });
  const sum = screen.getByTestId("sum");
  expect(sum.textContent).toBe("64");
});

test("Test for numbers mixed with characters", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("type-something");
  fireEvent.change(input, { target: { value: "I8v9a10n" } });
  const sum = screen.getByTestId("sum");
  expect(sum.textContent).toBe("46");
});

test("Test for special characters", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("type-something");
  fireEvent.change(input, { target: { value: "$#@!#$%ˆ&" } });
  const sum = screen.getByTestId("sum");
  expect(sum.textContent).toBe("0");
});
