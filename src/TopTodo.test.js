import React from "react";
import { render } from "@testing-library/react";

import TEST_DATA from "./_testCommon";
import TopTodo from "./TopTodo";


// const { id, title, description, priority } = TEST_DATA[0];


it("renders without crashing", function () {
    render(<TopTodo todos={TEST_DATA} />);
});

it("matches snapshot", function () {
    console.log(TEST_DATA)
    const { asFragment } = render(<TopTodo todos={TEST_DATA} />);
    expect(asFragment()).toMatchSnapshot();
});

it("contains TopTodo todo information", function () {
    const { container, debug } = render(<TopTodo todos={TEST_DATA} />);
    debug(container)
    expect(container.querySelector('.Todo'))
        .toBeInTheDocument();
});

// other tests for TopTodo:
// could also see what zero, one renders