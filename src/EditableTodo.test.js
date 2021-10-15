import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TEST_DATA from "./_testCommon";
import EditableTodo from "./EditableTodo";

it("renders without crashing", function () {
    render(<EditableTodo todo={TEST_DATA[0]} />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<EditableTodo todo={TEST_DATA[0]} />);
    expect(asFragment()).toMatchSnapshot();
});

it("edit button shows form", function () {
    const  { getByPlaceholderText , 
            queryByText, 
            debug, 
            getByLabelText,
            container } = render(<EditableTodo todo={TEST_DATA[0]}/>);

    // no items yet
    expect(container.querySelector(".NewTodoForm")).not.toBeInTheDocument();

    const editButton = container.querySelector(".EditableTodo-toggle");

    // // fill out the form
    fireEvent.click(editButton);
    
    expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
  });