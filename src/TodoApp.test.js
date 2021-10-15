import React from "react";
import { render } from "@testing-library/react";

import TEST_DATA from "./_testCommon";
import TodoApp from "./TodoApp";

it("renders without crashing", function () {
    render(<TodoApp initialTodos={TEST_DATA} />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoApp initialTodos={TEST_DATA} />);
    expect(asFragment()).toMatchSnapshot();
});