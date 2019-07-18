import * as React from "react";
import { shallow } from "enzyme";
import { Row } from "..";

describe("Row", () => {
  it("should render with space-between", () => {
    const row = shallow(
      <Row height="50px" mainAxisAlignment="space-between" />
    );

    expect(row).toMatchSnapshot();
  });
});
