import * as React from "react";
import { shallow } from "enzyme";
import Widget from "..";
import { Text } from "../../../vendor/elements";

describe("Widget", () => {
  it("should render", () => {
    const column = shallow(
      <Widget title="Some Title" height={10} width={10} />
    );

    expect(column).toMatchSnapshot();
  });

  it("should render with children", () => {
    const column = shallow(
      <Widget title="Some Title" height={10} width={10}>
        <Text>Hello</Text>
      </Widget>
    );

    expect(column).toMatchSnapshot();
  });
});
