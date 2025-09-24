import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the NavbarComponent", () => {
  render(<App />);
  const navbarElement = screen.getByRole("heading", { name: /SB News/i });
  expect(navbarElement).toBeInTheDocument();
});
