import Greetings from "./Greetings";
import { render } from "@testing-library/react";
import * as React from "react";

describe("Greetings", () => {
  /* Test that if no name prop is provided, the unit test's snapshot will
   * match one that only has "Welcome!" within the h1 tags.  */
  it("will display only 'Welcome!' if no props are provided.", () => {
    var component = render(<Greetings />);
    expect(component).toMatchSnapshot();
  });

  /* Test that if a name prop is provided, the unit test's snapshot will
   * match one that has "Weclome back {whichever name you provided}!" within the h1 tags. */
  it("will display the users name if passed via props.", () => {
    var component = render(<Greetings name={"Mike"} />);
    expect(component).toMatchSnapshot();
  });
});
