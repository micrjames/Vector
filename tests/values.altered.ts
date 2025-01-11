import { VectorND } from "../VectorND";
import { Range } from "../Range/range";
import { Utilities } from "../Utilities/Utilities";

export const test_values_altered = () => {
   describe("From the Initial Implementation", () => {
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
	  describe("With All New Values", () => {
		 let quarterPI: number;
		 let neg_quarterPI: number;
		 beforeAll(() => {
			quarterPI = Math.PI/4;
			neg_quarterPI = -1 * quarterPI;
		 });
		 describe("In the First Quadrant", () => {
			let newValues: number[];
			beforeAll(() => {
			   newValues = [1, 1];
			   vec2D.values = newValues;
			});
			describe("Set", () => {
			   describe("It", () => {
				  test("Should not be undefined.", () => {
					 expect(vec2D).toBeDefined();
				  });
				  test("Should have a direction of 'ᴨ/4' radians.", () => {
					 const direction = vec2D.direction[0];
					 expect(direction).toBe(quarterPI);
				  });
				  test("Should have a 'magnitude' of '√2'.", () => {
					 const magnitude = vec2D.length;
					 const sqrt2 = Math.sqrt(2);
					 expect(magnitude).toBe(sqrt2);
				  });
			   });
			   describe("Its elements", () => {
				  test("Should have elements that are not undefined.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = vec2D.at(idx);
						expect(whichElement).toBeDefined();
					 }
				  });
				  test("Should consist of 2 elements.", () => {
					 expect(vec2DSize).toBe(N);
				  });
				  test("Should have each element typed as number.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = vec2D.at(idx);
						expect(whichElement).toEqual(expect.any(Number));
					 }
				  });
			   });
			});
			describe("Elements Indexed", () => {
			   test("Should have a 'one' as the first element.", () => {
				  const elementIdx = 0;
				  const element = 1;
				  const isOne1stElement = vec2D.indexOf(element) === elementIdx;
				  expect(isOne1stElement).toBeTruthy();
			   });
			   test("Should consist of a two element set of all ones.", () => {
				  const numOnes = 2;
				  const vec2DArr = [...new Range(N)].map((_, idx) => vec2D.at(idx));
				  const countOccurrences = utility.utils.countOccurrences(vec2DArr);
				  const vec2DArrConsists = Object.values(countOccurrences).every(val => val == numOnes);
				  expect(vec2DArrConsists).toBeTruthy();
			   });
			});
			describe("Too Many Elements", () => {
			   describe("Before the Range", () => {
				  beforeAll(() => {
					 newValues = [0, 0, 0];
				  });
				  test("Should Throw the Error.", () => {
					 expect(() => {
						vec2D.values = newValues;
					 }).toThrow("Too Many Elements in Vector");
				  });
			   });
			});
		 });
		 describe("In the Second Quadrant", () => {
			let newValues: number[];
			beforeAll(() => {
			   newValues = [-1, 1];
			   vec2D.values = newValues;
			});
			describe("Set", () => {
			   describe("It", () => {
				  test("Should not be undefined.", () => {
					 expect(vec2D).toBeDefined();
				  });
				  test("Should have a direction of '-ᴨ/4' radians.", () => {
					 const direction = vec2D.direction[0];
					 expect(direction).toBe(neg_quarterPI);
				  });
				  test("Should have a 'magnitude' of '√2'.", () => {
					 const magnitude = vec2D.length;
					 const sqrt2 = Math.sqrt(2);
					 expect(magnitude).toBe(sqrt2);
				  });
			   });
			   describe("Its elements", () => {
				  test("Should have elements that are not undefined.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = vec2D.at(idx);
						expect(whichElement).toBeDefined();
					 }
				  });
				  test("Should consist of 2 elements.", () => {
					 expect(vec2DSize).toBe(N);
				  });
				  test("Should have each element typed as number.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = vec2D.at(idx);
						expect(whichElement).toEqual(expect.any(Number));
					 }
				  });
			   });
			});
			describe("Elements Indexed", () => {
			   test("Should have a 'negative one' as the first element.", () => {
				  const elementIdx = 0;
				  const element = -1;
				  const isOne1stElement = vec2D.indexOf(element) === elementIdx;
				  expect(isOne1stElement).toBeTruthy();
			   });
			   test("Should consist of a two element set of a one and a negative one.", () => {
				  const numEach = 1;
				  const vec2DArr = [...new Range(N)].map((_, idx) => vec2D.at(idx));
				  const countOccurrences = utility.utils.countOccurrences(vec2DArr);
				  const vec2DArrConsists = Object.values(countOccurrences).every(val => val == numEach);
				  expect(vec2DArrConsists).toBeTruthy();
			   });
			});
			describe("Too Many Elements", () => {
			   describe("Before the Range", () => {
				  beforeAll(() => {
					 newValues = [0, 0, 0];
				  });
				  test("Should Throw the Error.", () => {
					 expect(() => {
						vec2D.values = newValues;
					 }).toThrow("Too Many Elements in Vector");
				  });
			   });
			});
		 });
		 describe("In the Third Quadrant", () => {
			let newValues: number[];
			beforeAll(() => {
			   newValues = [-1, -1];
			   vec2D.values = newValues;
			});
			describe("Set", () => {
			   describe("It", () => {
				  test("Should not be undefined.", () => {
					 expect(vec2D).toBeDefined();
				  });
				  test("Should have a direction of 'ᴨ/4' radians.", () => {
					 const direction = vec2D.direction[0];
					 expect(direction).toBe(quarterPI);
				  });
				  test("Should have a 'magnitude' of '√2'.", () => {
					 const magnitude = vec2D.length;
					 const sqrt2 = Math.sqrt(2);
					 expect(magnitude).toBe(sqrt2);
				  });
			   });
			   describe("Its elements", () => {
				  test("Should have elements that are not undefined.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = vec2D.at(idx);
						expect(whichElement).toBeDefined();
					 }
				  });
				  test("Should consist of 2 elements.", () => {
					 expect(vec2DSize).toBe(N);
				  });
				  test("Should have each element typed as number.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = vec2D.at(idx);
						expect(whichElement).toEqual(expect.any(Number));
					 }
				  });
			   });
			});
			describe("Elements Indexed", () => {
			   test("Should have a 'negative one' as the first element.", () => {
				  const elementIdx = 0;
				  const element = -1;
				  const isOne1stElement = vec2D.indexOf(element) === elementIdx;
				  expect(isOne1stElement).toBeTruthy();
			   });
			   test("Should consist of a two element set of all negative  ones.", () => {
				  const numsOnes = 2;
				  const vec2DArr = [...new Range(N)].map((_, idx) => vec2D.at(idx));
				  const countOccurrences = utility.utils.countOccurrences(vec2DArr);
				  const vec2DArrConsists = Object.values(countOccurrences).every(val => val == numsOnes);
				  expect(vec2DArrConsists).toBeTruthy();
			   });
			});
			describe("Too Many Elements", () => {
			   describe("Before the Range", () => {
				  beforeAll(() => {
					 newValues = [0, 0, 0];
				  });
				  test("Should Throw the Error.", () => {
					 expect(() => {
						vec2D.values = newValues;
					 }).toThrow("Too Many Elements in Vector");
				  });
			   });
			});
		 });
		 describe("In the Fourth Quadrant", () => {
			let newValues: number[];
			beforeAll(() => {
			   newValues = [1, -1];
			   vec2D.values = newValues;
			});
			describe("Set", () => {
			   describe("It", () => {
				  test("Should not be undefined.", () => {
					 expect(vec2D).toBeDefined();
				  });
				  test("Should have a direction of '-ᴨ/4' radians.", () => {
					 const direction = vec2D.direction[0];
					 expect(direction).toBe(neg_quarterPI);
				  });
				  test("Should have a 'magnitude' of '√2'.", () => {
					 const magnitude = vec2D.length;
					 const sqrt2 = Math.sqrt(2);
					 expect(magnitude).toBe(sqrt2);
				  });
			   });
			   describe("Its elements", () => {
				  test("Should have elements that are not undefined.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = vec2D.at(idx);
						expect(whichElement).toBeDefined();
					 }
				  });
				  test("Should consist of 2 elements.", () => {
					 expect(vec2DSize).toBe(N);
				  });
				  test("Should have each element typed as number.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = vec2D.at(idx);
						expect(whichElement).toEqual(expect.any(Number));
					 }
				  });
			   });
			});
			describe("Elements Indexed", () => {
			   test("Should have a 'one' as the first element.", () => {
				  const elementIdx = 0;
				  const element = 1;
				  const isOne1stElement = vec2D.indexOf(element) === elementIdx;
				  expect(isOne1stElement).toBeTruthy();
			   });
			   test("Should consist of a two element set of a one and a negative one.", () => {
				  const numEach = 1;
				  const vec2DArr = [...new Range(N)].map((_, idx) => vec2D.at(idx));
				  const countOccurrences = utility.utils.countOccurrences(vec2DArr);
				  const vec2DArrConsists = Object.values(countOccurrences).every(val => val == numEach);
				  expect(vec2DArrConsists).toBeTruthy();
			   });
			});
			describe("Too Many Elements", () => {
			   describe("Before the Range", () => {
				  beforeAll(() => {
					 newValues = [0, 0, 0];
				  });
				  test("Should Throw the Error.", () => {
					 expect(() => {
						vec2D.values = newValues;
					 }).toThrow("Too Many Elements in Vector");
				  });
			   });
			});
		 });
	  });
	  describe("With New Value", () => {
		 let newVec2D: VectorND;
		 let newVec2DSize: number;
		 describe("In No Octant", () => {
			let newValue: number;
			beforeAll(() => {
			   newValue = 0;
			   newVec2D = vec2D.addAValue(newValue);
			   newVec2DSize = newVec2D.N;
			});
			describe("Set", () => {
			   describe("It", () => {
				  test("Should not be undefined.", () => {
					 expect(newVec2D).toBeDefined();
				  });
				  test("Should have a direction, 'ɸ' of '-ᴨ/4' and 'ϑ' of 'ᴨ/2.'", () => {
					 const direction = newVec2D.direction;
					 const phi = direction[0];
					 const theta = direction[1]; 
					 expect(phi).toBe(-Math.PI/4);
					 expect(theta).toBe(Math.PI/2);
				  });
				  test("Should have a 'magnitude' of '√2'.", () => {
					 const magnitude = vec2D.length;
					 const sqrt2 = Math.sqrt(2);
					 expect(magnitude).toBe(sqrt2);
				  });
			   });
			   describe("Its elements", () => {
				  test("Should have elements that are not undefined.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = newVec2D.at(idx);
						expect(whichElement).toBeDefined();
					 }
				  });
				  test("Should consist of 1 more element.", () => {
					 expect(newVec2DSize).toBe(N+1);
				  });
				  test("Should have each element typed as number.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = newVec2D.at(idx);
						expect(whichElement).toEqual(expect.any(Number));
					 }
				  });
			   });
			});
			describe("Element Indexed", () => {
			   test("Should have a 'zero' as the last element.", () => {
				  const elementIdx = newVec2DSize-1;
				  const element = 0;
				  const isZeroLastElement = newVec2D.indexOf(element) === elementIdx;
				  expect(isZeroLastElement).toBeTruthy();
			   });
			   test("Should consist of 'one' of each element.", () => {
				  const numEach = 1;
				  const newVec2DArr = [...new Range(N)].map((_, idx) => newVec2D.at(idx));
				  const countOccurrences = utility.utils.countOccurrences(newVec2DArr);
				  const vec2DArrConsists = Object.values(countOccurrences).every(val => val == numEach);
				  expect(vec2DArrConsists).toBeTruthy();
			   });
			});
		 });
		 describe("In The Fourth Octant", () => {
			let newValue: number;
			beforeAll(() => {
			   newValue = 1;
			   newVec2D = vec2D.addAValue(newValue);
			   newVec2DSize = newVec2D.N;
			});
			describe("Set", () => {
			   describe("It", () => {
				  test("Should not be undefined.", () => {
					 expect(newVec2D).toBeDefined();
				  });
				  test("Should have a direction, 'ɸ' of '-ᴨ/4' and 'ϑ' of 'ᴨ/2.'", () => {
					 const direction = newVec2D.direction;
					 const phi = direction[0];
					 const theta = direction[1]; 
					 expect(phi).toBe(-Math.PI/4);
					 expect(theta).toBeCloseTo(0.955316618124509, 2);
				  });
				  test("Should have a 'magnitude' of '√2'.", () => {
					 const magnitude = vec2D.length;
					 const sqrt2 = Math.sqrt(2);
					 expect(magnitude).toBe(sqrt2);
				  });
			   });
			   describe("Its elements", () => {
				  test("Should have elements that are not undefined.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = newVec2D.at(idx);
						expect(whichElement).toBeDefined();
					 }
				  });
				  test("Should consist of 1 more element.", () => {
					 expect(newVec2DSize).toBe(N+1);
				  });
				  test("Should have each element typed as number.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = newVec2D.at(idx);
						expect(whichElement).toEqual(expect.any(Number));
					 }
				  });
			   });
			});
			describe("Element Indexed", () => {
			   test("Should have a 'one' as the last element.", () => {
				  const element = 1;
				  const isOneLastElement = newVec2D.at(vec2DSize) === element;
				  expect(isOneLastElement).toBeTruthy();
			   });
			   test("Should consist of 'two' ones and 'one' -1.", () => {
				  const numsOnes = 2;
				  const numsNegOne = 1;
				  const newVec2DArr = [...new Range(N)].map((_, idx) => newVec2D.at(idx));
				  const countOccurrences = utility.utils.countOccurrences(newVec2DArr);
				  const vec2DArrConsists = Object.values(countOccurrences).every(val => val == numsOnes || val == numsNegOne);
				  expect(vec2DArrConsists).toBeTruthy();
			   });
			});
		 });
		 describe("In The Eighth Octant", () => {
			let newValue: number;
			beforeAll(() => {
			   newValue = -1;
			   newVec2D = vec2D.addAValue(newValue);
			   newVec2DSize = newVec2D.N;
			});
			describe("Set", () => {
			   describe("It", () => {
				  test("Should not be undefined.", () => {
					 expect(newVec2D).toBeDefined();
				  });
				  test("Should have a direction, 'ɸ' of '-ᴨ/4' and 'ϑ' of 'ᴨ/2.'", () => {
					 const direction = newVec2D.direction;
					 const phi = direction[0];
					 const theta = direction[1]; 
					 expect(phi).toBe(-Math.PI/4);
					 expect(theta).toBeCloseTo(2.1862760354652844, 2);
				  });
				  test("Should have a 'magnitude' of '√2'.", () => {
					 const magnitude = vec2D.length;
					 const sqrt2 = Math.sqrt(2);
					 expect(magnitude).toBe(sqrt2);
				  });
			   });
			   describe("Its elements", () => {
				  test("Should have elements that are not undefined.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = newVec2D.at(idx);
						expect(whichElement).toBeDefined();
					 }
				  });
				  test("Should consist of 1 more element.", () => {
					 expect(newVec2DSize).toBe(N+1);
				  });
				  test("Should have each element typed as number.", () => {
					 for(const idx of [...new Range(N)]) {
						const whichElement = newVec2D.at(idx);
						expect(whichElement).toEqual(expect.any(Number));
					 }
				  });
			   });
			});
			describe("Element Indexed", () => {
			   test("Should have a 'zero' as the last element.", () => {
				  const elementIdx = newVec2DSize-1;
				  const element = -1;
				  const isOneLastElement = newVec2D.at(vec2DSize) === element;
				  expect(isOneLastElement).toBeTruthy();
			   });
			   test("Should consist of 'two' ones and 'one' -1.", () => {
				  const numsOnes = 2;
				  const numsNegOne = 1;
				  const newVec2DArr = [...new Range(N)].map((_, idx) => newVec2D.at(idx));
				  const countOccurrences = utility.utils.countOccurrences(newVec2DArr);
				  const vec2DArrConsists = Object.values(countOccurrences).every(val => val == numsOnes || val == numsNegOne);
				  expect(vec2DArrConsists).toBeTruthy();
			   });
			});
		 });
	  });
   });
}; 
