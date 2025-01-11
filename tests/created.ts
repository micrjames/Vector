import { VectorND } from "../VectorND";
import { Range } from "../Range/range";
import { Utilities } from "../Utilities/Utilities";

export const test_created = () => {
   describe("Implemented initially with all zeroes.", () => {
	  let N: number;
	  let vec2D: VectorND;
	  let vec2DSize: number;
	  let utility: Utilities;
	  beforeAll(() => {
		 N = 2;
		 vec2D = new VectorND(N);
		 vec2DSize = vec2D.N;
		 utility = new Utilities();
	  });
	  describe("It", () => {
		 let zero: number;
		 let magnitude: number;
		 beforeAll(() => {
			zero = 0;
			magnitude = vec2D.length;
		 });
		 test("Should not be undefined.", () => {
			expect(vec2D).toBeDefined();
		 });
		 test("Should have 'No Direction'.", () => {
			expect(() => {
			   vec2D.direction
			}).toThrow("Zero Vector, No Direction");
		 });
		 test("Should have a 'magnitude' of '0'.", () => {
			expect(magnitude).toBe(zero);
		 });
	  });
	  describe("Its elements", () => {
		 let whichElement: number;
		 test("Should have elements that are not undefined.", () => {
			for(const idx of [...new Range(N)]) {
			   whichElement = vec2D.at(idx);
			   expect(whichElement).toBeDefined();
			}
		 });
		 test("Should consist of 2 elements.", () => {
			expect(vec2DSize).toBe(N);
		 });
		 test("Should have each element typed as number.", () => {
			for(const idx of [...new Range(N)]) {
			   whichElement = vec2D.at(idx);
			   expect(whichElement).toEqual(expect.any(Number));
			}
		 });
	  });
	  describe("An Element Indexed", () => {
		 describe("Within Range", () => {
			   let element: number;
			   test("Should have a 'zero' as the first element.", () => {
				  let elementIdx: number;
				  element = elementIdx = 0;
				  const isZero1stElement = vec2D.indexOf(element) === elementIdx;
				  expect(isZero1stElement).toBeTruthy();
			   });
			   test("Should consist of a two element set of all zeros.", () => {
				  const numZeroes = 2;
				  const vec2DArr = [...new Range(N)].map((_, idx) => vec2D.at(idx));
				  const countOccurrences = utility.utils.countOccurrences(vec2DArr);
				  const vec2DArrConsists = Object.values(countOccurrences).every(val => val == numZeroes);
				  expect(vec2DArrConsists).toBeTruthy();
			   });
		 });
		 describe("Outside of Range", () => {
			let index: number;
			describe("Before the Range", () => {
			   beforeAll(() => {
				  index = -1;
			   });
			   test("Should Throw the Error.", () => {
				  expect(() => {
					 vec2D.at(index)
				  }).toThrow("Index Out of Range");
			   });
			});
			describe("After the Range", () => {
			   beforeAll(() => {
				  index = N+1;
			   });
			   test("Should Throw the Error.", () => {
				  expect(() => {
					 vec2D.at(index)
				  }).toThrow("Index Out of Range");
			   });
			});
		 });
	  });
   });
};
