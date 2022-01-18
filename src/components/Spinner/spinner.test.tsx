/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";

import Spinner from ".";

describe("Spinner Component", () => {
  test("renders", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelectorAll("div")).toHaveLength(3);
  });
});
