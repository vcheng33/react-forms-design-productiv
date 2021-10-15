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