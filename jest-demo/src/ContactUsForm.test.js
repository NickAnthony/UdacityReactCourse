import ContactUsForm from "./ContactUsForm";
import { render, fireEvent } from "@testing-library/react";
import * as React from "react";

describe("ContactUsForm", () => {
  /* Write a test to verify that if all fields except the email field are
   * populated and the user clicks the submit button, the success message
   * is not displayed and an error message is displayed.
   */
  it("will present an error message when only the email field is empty.", () => {
    var component = render(<ContactUsForm />);

    // Add input to the department select
    var departmentInput = component.getByTestId("department-select");
    fireEvent.change(departmentInput, { target: { value: "sales" } });
    // Add input to the question area
    var questionInput = component.getByTestId("question-textarea");
    fireEvent.change(questionInput, {
      target: { value: "What is the meaning of life?" },
    });
    // Submit the form
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    // Verify the component outputs
    expect(component.queryByTestId("success-header")).not.toBeInTheDocument();
    expect(component.getByTestId("error-header")).toBeInTheDocument();
  });

  /* Write a test to verify that if all fields except the department field
   * are populated and the user clicks the submit button, the success message
   * is not displayed and an error message is displayed.
   */
  it("will present an error message when only the department field is empty.", () => {
    var component = render(<ContactUsForm />);

    // Add empty input to the email
    var emailInput = component.getByTestId("email-input");
    fireEvent.change(emailInput, {
      target: { value: "no-reply@gmail.com" },
    });
    // Add input to the question area
    var questionInput = component.getByTestId("question-textarea");
    fireEvent.change(questionInput, {
      target: { value: "What is the meaning of life?" },
    });
    // Submit the form
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    // Verify the component outputs
    expect(component.queryByTestId("success-header")).not.toBeInTheDocument();
    expect(component.getByTestId("error-header")).toBeInTheDocument();
  });

  /* Write a test to verify that if all fields except the question field are
   * populated and the user clicks the submit button, the success message is
   * not displayed and an error message is displayed.
   */
  it("will present an error message when only the question field is empty.", () => {
    var component = render(<ContactUsForm />);

    // Add empty input to the email
    var emailInput = component.getByTestId("email-input");
    fireEvent.change(emailInput, {
      target: { value: "no-reply@gmail.com" },
    });
    // Add input to the department select
    var departmentInput = component.getByTestId("department-select");
    fireEvent.change(departmentInput, { target: { value: "sales" } });
    // Submit the form
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    // Verify the component outputs
    expect(component.queryByTestId("success-header")).not.toBeInTheDocument();
    expect(component.getByTestId("error-header")).toBeInTheDocument();
  });

  /* Write a test to verify that if all fields are populated and the user
   * clicks the submit button, the success message is displayed and no error message displayed.
   */
  it("will present a success message iff all fields are populated.", () => {
    var component = render(<ContactUsForm />);

    // Add empty input to the email
    var emailInput = component.getByTestId("email-input");
    fireEvent.change(emailInput, {
      target: { value: "no-reply@gmail.com" },
    });
    // Add input to the department select
    var departmentInput = component.getByTestId("department-select");
    fireEvent.change(departmentInput, { target: { value: "sales" } });
    // Add input to the question area
    var questionInput = component.getByTestId("question-textarea");
    fireEvent.change(questionInput, {
      target: { value: "What is the meaning of life?" },
    });
    // Submit the form
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    // Verify the component outputs
    expect(component.queryByTestId("error-header")).not.toBeInTheDocument();
    expect(component.getByTestId("success-header")).toBeInTheDocument();
  });
});
