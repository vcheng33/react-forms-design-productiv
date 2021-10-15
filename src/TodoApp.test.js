import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TEST_DATA from "./_testCommon";
import TodoApp from "./TodoApp";

it("renders without crashing", function () {
    render(<TodoApp initialTodos={TEST_DATA} />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoApp initialTodos={TEST_DATA} />);
    expect(asFragment()).toMatchSnapshot();
});

it("creating a new todo", function () {
    const { getByPlaceholderText,
        getByLabelText,
        getAllByRole,
        queryByText,
        container } = render(<TodoApp initialTodos={TEST_DATA} />);

    const titleInput = getByPlaceholderText("Title");
    const descriptionInput = getByPlaceholderText("Description");
    const priorityInput = getByLabelText("Priority:");
    const submitBtn = container.querySelector(".NewTodoForm-addBtn");


    fireEvent.change(titleInput, { target: { value: "get ice cream" } });
    fireEvent.change(descriptionInput, { target: { value: "nom nom nom" } });
    fireEvent.change(priorityInput, { target: { value: 2 } });
    fireEvent.submit(submitBtn);

    const buttons = getAllByRole("button");
    expect(buttons.length).toEqual(9);
    expect(queryByText("get ice cream")).toBeInTheDocument();
    expect(queryByText("nom nom nom")).toBeInTheDocument();
})

it("delete a todo", function () {
    const {
        queryByText,
        container } = render(<TodoApp initialTodos={TEST_DATA} />);


    expect(queryByText("Code!")).toBeInTheDocument();
    expect(queryByText("Write some code")).toBeInTheDocument();

    const deleteBtn = container.querySelector(".EditableTodo-delBtn");
    fireEvent.click(deleteBtn);

    expect(queryByText("Code!")).not.toBeInTheDocument();
    expect(queryByText("Write some code")).not.toBeInTheDocument();
})

it("update a todo", function () {
    const {
        getByPlaceholderText,
        queryByText,
        getByDisplayValue,
        debug,
        container } = render(<TodoApp initialTodos={TEST_DATA} />);

    expect(queryByText("Code!")).toBeInTheDocument();
    expect(queryByText("Write some code")).toBeInTheDocument();

    const editButton = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editButton);


    const titleInput = container.querySelector("#newTodo-title");
    const descriptionInput = container.querySelector("#newTodo-description");
    // const priorityInput = getByLabelText("Priority:");
    // const deleteBtn = container.querySelector(".EditableTodo-delBtn");

    fireEvent.change(titleInput, { target: { value: "get ice cream" } });
    fireEvent.change(descriptionInput, { target: { value: "nom nom nom" } });

    const submitBtn = container.querySelector("div[id='1'] button.NewTodoForm-addBtn");
    // const submitBtn = firstTodo.querySelector(".EditableTodo-addBtn");
    fireEvent.submit(submitBtn);
    // console.log("submit", submitBtn)
    debug(submitBtn)
    debug()
    expect(queryByText("Code!")).not.toBeInTheDocument();
    expect(queryByText("Write some code")).not.toBeInTheDocument();
    expect(queryByText("get ice cream")).toBeInTheDocument();
    expect(queryByText("nom nom nom")).toBeInTheDocument();
})