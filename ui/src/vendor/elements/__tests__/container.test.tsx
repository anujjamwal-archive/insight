import * as React from "react";
import { shallow } from "enzyme";
import { Container } from "..";

describe("Container", () => {
  it("should render default", () => {
    const container = shallow(<Container />);

    expect(container).toMatchSnapshot();
  });

  it("should render with Margins", () => {
    const container = shallow(
      <Container
        marginLeft={10}
        marginRight={15}
        marginTop={20}
        marginBottom={22}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should render with Padding", () => {
    const container = shallow(
      <Container
        paddingLeft={10}
        paddingRight={15}
        paddingTop={20}
        paddingBottom={25}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should render with color", () => {
    const container = shallow(<Container color={"#dfa"} />);

    expect(container).toMatchSnapshot();
  });
});
