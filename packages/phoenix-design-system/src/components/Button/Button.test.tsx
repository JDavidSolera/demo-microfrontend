import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";

describe("UI / Button Component", () => {
  it("renders a button", () => {
    render(<Button label="hi! click me" />);
  });
});
