import * as React from "react";
import { shallow } from "enzyme";
import Column from "../column";

describe("Column", () => {
  it("should render with space-between", () => {
    const column = shallow(
      <Column width="50px" mainAxisAlignment="space-between" />
    );

    expect(column).toMatchSnapshot();
  });
});
