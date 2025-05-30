import { pow } from "../index.js";
import { assert } from "chai";

describe("pow", function () {
  before(() => {
    console.log("Starting tests for pow function");
  });

  describe("raises a variable x to the power of 3", () => {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected, "bwesit error");
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("input that the result must be NaN", () => {
    it("for negative n the result is NaN", function () {
      assert.isNaN(pow(2, -1));
    });

    it("for non-integer n the result is NaN", function () {
      assert.isNaN(pow(2, 1.5));
    });
  });

  after(() => {
    console.log("All tests for pow function completed");
  });
});
