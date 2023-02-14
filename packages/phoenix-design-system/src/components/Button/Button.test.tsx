import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";
import { DesignSystemProvider } from "../../provider";

describe("UI / Button Component", () => {
  test("renders a button", () => {
    render(
      <DesignSystemProvider>
        <Button label="hi! click me" />
      </DesignSystemProvider>
    );
  });
});
