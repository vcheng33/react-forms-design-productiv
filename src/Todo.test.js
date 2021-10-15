import React from "react";
import { render } from "@testing-library/react";

import TEST_DATA from "./_testCommon";
import Todo from "./Todo";

const { id, title, description, priority } = TEST_DATA[0];


it("renders without crashing", function () {
    render(<Todo />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<Todo
        id={id}
        title={title}
        description={description}
        priority={priority}
    />);
    expect(asFragment()).toMatchSnapshot();
});

it("contains todo information", function () {
    const { container } = render(<Todo
        id={id}
        title={title}
        description={description}
        priority={priority}
    />);
    expect(container.querySelector('.Todo'))
        .toBeInTheDocument();
});