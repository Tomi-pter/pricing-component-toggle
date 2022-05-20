import Counter from "./Counter";
import { render, fireEvent, screen } from "@testing-library/react";

test("should increment/decrement counter", () => {
    render( < Counter / > );

    const counter = screen.getByTestId("counter");
    const incBtn = screen.getByTestId("increment");
    const decBtn = screen.getByTestId("decrement");

    fireEvent.click(incBtn);

    expect(counter.textContent).toBe("1");

    fireEvent.click(decBtn);
    expect(counter.textContent).toBe("0");
    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();
});