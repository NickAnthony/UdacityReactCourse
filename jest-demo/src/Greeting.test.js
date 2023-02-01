import Greeting from "./Greeting";
import { render } from "@testing-library/react";
import * as React from "react";

describe("Greeting", () => {
  it("will match snapshot", () => {
    var component = render(<Greeting />);
    expect(component).toMatchSnapshot;
  });
});
