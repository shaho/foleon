/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Card from ".";

describe("Card Component", () => {
  test("renders with props", () => {
    const { container, getByText } = render(
      <Router>
        <Card id={101} name="simple-name" category="ebook" />
      </Router>,
    );
    expect(container).toBeTruthy();
    expect(getByText(/simple-name/)).toBeTruthy();
    expect(getByText(/ebook/)).toBeTruthy();
    expect(container.querySelector("a")?.getAttribute("href")).toEqual(
      "/publication/101",
    );
  });
});
