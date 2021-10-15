import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TEST_DATA from "./_testCommon";
import TodoForm from "./TodoForm";

it("renders without crashing", function () {
    render(<TodoForm />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("updates form data state when input changed", function () {
    const { getByPlaceholderText,
        queryByText,
        debug,
        getByLabelText,
        container } = render(<TodoForm />);

    // no items yet
    expect(queryByText("get ice cream: nom nom nom")).not.toBeInTheDocument();

    const titleInput = getByPlaceholderText("Title");
    const descriptionInput = getByPlaceholderText("Description");
    const priorityInput = getByLabelText("Priority:");


    // fill out the form
    fireEvent.change(titleInput, { target: { value: "get ice cream" } });
    fireEvent.change(descriptionInput, { target: { value: "nom nom nom" } });
    fireEvent.change(priorityInput, { target: { value: 2 } });

    debug();
    // item exists!
    expect(container.querySelector("#newTodo-title").value).toEqual("get ice cream");
    expect(container.querySelector("#newTodo-description").value).toEqual("nom nom nom");
    expect(container.querySelector("#newTodo-priority").value).toEqual("2");
    // expect(queryByText("nom nom nom")).toBeInTheDocument();
});

// other changes:
// mock submit, then check if the submit function would have been called