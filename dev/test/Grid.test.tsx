import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

import { Grid, Cell, CellMethod } from "../src/Grid";
import React from "react";

configure({ adapter: new Adapter() });

describe("Grid", () => {
  describe("#render", () => {
    it("has 12 columns", () => {
      const wrapper = shallow(<Grid />);
      expect(wrapper.get(0).props.style.gridTemplateColumns).to.equal(
        "repeat(12, 1fr)"
      );
    });
    it("has custom columns", () => {
      const wrapper = shallow(<Grid cols={32} />);
      expect(wrapper.get(0).props.style.gridTemplateColumns).to.equal(
        "repeat(32, 1fr)"
      );
    });
    it("has minmax columns by default", () => {
      const wrapper = shallow(<Grid method={CellMethod.FILL} />);
      expect(wrapper.get(0).props.style.gridTemplateColumns).to.equal(
        "repeat(auto-fill, minmax(0px, 1fr))"
      );
    });
    it("has minmax columns with custom props", () => {
      const wrapper = shallow(
        <Grid method={CellMethod.FIT} minWidth="200px" maxWidth="400px" />
      );
      expect(wrapper.get(0).props.style.gridTemplateColumns).to.equal(
        "repeat(auto-fit, minmax(200px, 400px))"
      );
    });
    it("renders children when passed in", () => {
      const wrapper = shallow(
        <Grid>
          <p>Test</p>
        </Grid>
      );
      expect(wrapper.contains(<p>Test</p>)).to.equal(true);
    });
  });
});

describe("Cell", () => {
  describe("#render", () => {
    it("spans 1 column with no properties", () => {
      const wrapper = shallow(<Cell />);
      expect(wrapper.get(0).props.style.gridColumn).to.equal("span 1");
    });
    it("renders children when passed in", () => {
      const wrapper = shallow(
        <Cell>
          <p>Test</p>
        </Cell>
      );
      expect(wrapper.contains(<p>Test</p>)).to.equal(true);
    });
    it("spans multiple columns", () => {
      const wrapper = shallow(<Cell span={4} />);
      expect(wrapper.get(0).props.style.gridColumn).to.equal("span 4");
    });
    it("starts at line", () => {
      const wrapper = shallow(<Cell start={2} />);
      expect(wrapper.get(0).props.style.gridColumn).to.equal("2 / span 1");
    });
    it("starts and spans", () => {
      const wrapper = shallow(<Cell start={2} span={3} />);
      expect(wrapper.get(0).props.style.gridColumn).to.equal("2 / span 3");
    });
  });
});
