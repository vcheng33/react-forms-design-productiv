import React from "react";
import { render } from "@testing-library/react";

import TEST_DATA from "./_testCommon";
import EditableTodoList from "./EditableTodoList";

it("renders without crashing", function () {
    render(<EditableTodoList todos={TEST_DATA} />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<EditableTodoList todos={TEST_DATA} />);
    expect(asFragment()).toMatchSnapshot();
});

it("renders all EditableToDos", function () {
    const { getAllByRole } = render(<EditableTodoList todos={TEST_DATA} />);

    const buttons = getAllByRole("button");
    expect(buttons.length).toEqual(6);
});

// other changes:
// even in smoke and snapshot, should pass in fn for the props
// pass in mock tests for the props
//      Note - just check if the mock functions are called/fired (toHaveBeenCalled)