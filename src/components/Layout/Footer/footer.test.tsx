/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";

import Footer from ".";

describe("Spinner Component", () => {
  test("renders", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("p")).toBeInTheDocument();
  });
});
