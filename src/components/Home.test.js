import Home from "./Home";
import { render, fireEvent, screen } from "@testing-library/react";

test("should toggle between annual and monthly", () => {
    render( < Home / > );

    const chkBox = screen.getByTestId("input");
    const price = screen.getAllByTestId("basic");

    fireEvent.click(chkBox);

    expect(price[0].textContent).toBe("19.99");
});