import React from "react";
import { render } from "@testing-library/react";

import TEST_DATA from "./_testCommon";
import TodoForm from "./TodoForm";

it("renders without crashing", function () {
    render(<TodoForm />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

// it("can add a new todo", function () {
//     const { getByLabelText, queryByText } = render(<TodoForm />);

//     // no items yet
//     expect(queryByText("ice cream: 100")).not.toBeInTheDocument();

//     const titleInput = getByLabelText("Title:");
//     const descriptionInput = getByLabelText("Description:");
//     const submitBtn = queryByText("Add a new item!");

//     // fill out the form
//     fireEvent.change(nameInput, { target: { value: "ice cream" } });
//     fireEvent.change(qtyInput, { target: { value: 100 } });
//     fireEvent.click(submitBtn);

//     // item exists!
//     expect(queryByText("ice cream: 100")).toBeInTheDocument();
//   });