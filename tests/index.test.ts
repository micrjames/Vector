import { VectorND } from "../VectorND";

describe("A Vector", () => {
   let N: number;
   let vec2D: VectorND;
   let vec2DSize: number;
   beforeAll(() => {
	  N = 2;
	  vec2D = new VectorND(N);
	  vec2DSize = vec2D.N;
   });
   describe("A Vector implemented initially with all zeroes.", () => {
	  test("Should not be undefined.", () => {
		 expect(vec2D).toBeDefined();
	  });
	  test("Should have elements that are not undefined.", () => {
		 for(const idx of [0, 1]) {
			expect(vec2D.at(idx)).toBeDefined();
		 }
	  });
	  test("Should consist of 2 elements.", () => {
		 expect(vec2DSize).toBe(N);
	  });
	  test("Should have each element typed as number.", () => {
		 for(const idx of [0, 1]) {
			expect(vec2D.at(idx)).toEqual(expect.any(Number));
		 }
	  });
	  test("Should have a 'zero' as the first element.", () => {
		 let elementIdx: number;
		 const element = elementIdx = 0;
		 const isZero1stElement = vec2D.indexOf(element) === elementIdx;
		 expect(isZero1stElement).toBeTruthy();
	  });
	  test("Should consist of a two element set of all zeros.", () => {
		 const element = 0;
		 let vec2DArr: number[] = [];
		 for(const idx of [0, 1]) {
			if(vec2D.at(idx) === element) vec2DArr.push(element);
		 }
		 expect(vec2DArr).toHaveLength(vec2DSize);
	  });
   });
});

/*
   indexOf(element: number): number
*/
