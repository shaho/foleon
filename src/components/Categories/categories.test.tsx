/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import Categories from ".";

describe("Categories Component", () => {
  test("renders with props", () => {
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <Categories
        categories={{
          list: [
            { key: "ebook", name: "ebook" },
            { key: "two", name: "two" },
            { key: "one", name: "one" },
          ],
          loading: false,
          error: false,
        }}
        filter="ebook"
        onItemClicked={mockFn}
      />,
    );
    expect(container).toBeTruthy();
    expect(getByText(/two/)).toBeTruthy();
    expect(getByText(/one/)).toBeTruthy();
    expect(getByText(/ebook/).getAttribute("class")).toContain("active");
    const cat = container.querySelectorAll("#ebook");
    fireEvent.click(cat[0]);
    expect(mockFn).toHaveBeenCalledWith({ key: "ebook", name: "ebook" });
  });
});
