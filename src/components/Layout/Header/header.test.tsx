/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";

import Header from ".";

describe("Spinner Component", () => {
  test("renders", () => {
    const { container } = render(<Header title="Publications" />);
    expect(container.querySelectorAll("h2")).toHaveLength(1);
  });
});
