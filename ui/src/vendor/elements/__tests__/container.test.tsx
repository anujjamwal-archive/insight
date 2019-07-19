import * as React from "react";
import { shallow } from "enzyme";
import { Container } from "..";

describe("Container", () => {
  it("should render default", () => {
    const container = shallow(<Container width={14} height={21} />);

    expect(container).toMatchSnapshot();
  });

  it("should render with Margins", () => {
    const container = shallow(
      <Container
        width={14}
        height={21}
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
        width={14}
        height={21}
        paddingLeft={10}
        paddingRight={15}
        paddingTop={20}
        paddingBottom={25}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should render with color", () => {
    const container = shallow(
      <Container width={14} height={21} color={"#dfa"} />
    );

    expect(container).toMatchSnapshot();
  });
});
