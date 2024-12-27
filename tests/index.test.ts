import { VectorND } from "../VectorND";

describe("A Vector", () => {
   let numEls: number;
   let vec2D: VectorND;
   beforeAll(() => {
	  numEls = 2;
	  vec2D = new VectorND(2);
	  console.log(vec2D);
   });
   describe("A Vector implemented initially with all zeroes.", () => {
	  test.todo("Should not be undefined.");
	  test.todo("Should have elements that are not undefined.");
	  test.todo("Should consist of 4 elements.");
	  test.todo("Should consist of 4 element set of all zeros.");
   });
});
