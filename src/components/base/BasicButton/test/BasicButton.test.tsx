import * as React from "react";
import { render, getByLabelText, getByText } from "@testing-library/react";
import BasicButton from "..";

describe("\nTests Suite for BasicButton Component \n", () => {
  test("Renders BasicButton with classComponent from defaults, color from default, and child text", () => {
    const { getByText } = render(<BasicButton>Confirm</BasicButton>);
    const btn = getByText(/confirm/i);

    expect(btn).toBeTruthy();
    expect(btn.tagName.toLowerCase()).toBe("button");
    expect(btn).toHaveClass("btn btn-secondary");
  });

  test("Renders BasicButton with classComponent from props, color from props, and child text", () => {
    const { getByText } = render(
      <BasicButton componentClass="div">Confirm</BasicButton>
    );
    const btn = getByText(/confirm/i);

    expect(btn).toBeTruthy();
    expect(btn.tagName.toLowerCase()).toBe("div");
    expect(btn).toHaveClass("btn btn-secondary");
  });

  test("TODO: Renders BasicButton with child nodes", () => {});
});
