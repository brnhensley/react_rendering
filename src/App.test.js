import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import ChildComponent from "./ChildComponent";
import ParentComponent from "./ParentComponent";

test("App passes child title text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Child Component/i);
  expect(linkElement).toBeInTheDocument();
});

test("Parent passes child title text", () => {
  render(<ParentComponent childTitle="extra cheese please-burger" />);
  const linkElement = screen.getByText(/cheese please/i);
  expect(linkElement).toBeInTheDocument();
});

test("onclick counter state updates", () => {
  render(
    <ParentComponent childTitle="winking face" handleTitleChange={() => {}} />
  );
  fireEvent.click(screen.getByText(/Update State on Parent/));
  expect(screen.getByText("1")).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Update State on Parent/));
  expect(screen.getByText("2")).toBeInTheDocument();
  // test rapid state changes are successful
  fireEvent.click(screen.getByText(/Update State on Parent/));
  fireEvent.click(screen.getByText(/Update State on Parent/));
  expect(screen.getByText("4")).toBeInTheDocument();
});

test("renders child title text", () => {
  render(<ChildComponent title={"cheeseburgers"} />);
  const linkElement = screen.getByText(/cheeseburgers/i);
  expect(linkElement).toBeInTheDocument();
});

test("onclick title state updates", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Change Title/));
  expect(
    screen.getByText("Now I'm a little happy guy! ~~( ᐛ )~~")
  ).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Change Title/));
  expect(screen.getByText("Child Component")).toBeInTheDocument();

  // test rapid state changes are successful
  fireEvent.click(screen.getByText(/Change Title/));
  fireEvent.click(screen.getByText(/Change Title/));
  expect(screen.getByText("Child Component")).toBeInTheDocument();
});
