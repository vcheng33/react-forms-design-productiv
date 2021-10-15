import React from "react";
import { render } from "@testing-library/react";

import TEST_DATA from "./_testCommon";
import EditableTodo from "./EditableTodo";

it("renders without crashing", function () {
    render(<EditableTodo todo={TEST_DATA[0]} />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<EditableTodo todo={TEST_DATA[0]} />);
    expect(asFragment()).toMatchSnapshot();
});