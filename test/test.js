import { calculateShipping, pow } from "../index.js";
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

describe("calculateShipping", ()=> {
    let expected = 0;

    function makeTest(weight) {
        expected = (5.99 + (weight * 2.50)).toFixed(2);
    }
    
    // test that will iterate through the weights 1 to 5
    for (let weight = 1; weight <= 5; weight++) {
        makeTest(weight);
        it(`calculates the shipping for ${weight}kg`, () => {
            assert.equal(calculateShipping(weight), expected);
        });
    }

    it("calculates the shipping for 5kg", ()=> {
        makeTest(5);
        assert.equal(calculateShipping(5), expected);
    });

    // it("this shit calculates the shipping", ()=> {
    //     assert.equal(calculateShipping(5), expected)
    // })
});
