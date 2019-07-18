import * as React from "react";
import { ApplicationLayout } from "..";
import { shallow } from "enzyme";

describe(ApplicationLayout, () => {
  it("should render correctly", () => {
    const layout = shallow(<ApplicationLayout />);

    expect(layout).toMatchSnapshot();
  });
});
