import { VectorND } from "../VectorND";
import { Range } from "../Range/range";
import { Utilities } from "../Utilities/Utilities";

describe("A Vector", () => {
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
   describe("Created and", () => {
	  describe("Implemented initially with all zeroes.", () => {
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
			   for(const idx of [0, 1]) {
				  whichElement = vec2D.at(idx);
				  expect(whichElement).toBeDefined();
			   }
			});
			test("Should consist of 2 elements.", () => {
			   expect(vec2DSize).toBe(N);
			});
			test("Should have each element typed as number.", () => {
			   for(const idx of [0, 1]) {
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
					 const vec2DArr = [0, 1].map((_, idx) => vec2D.at(idx));
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
	  describe("Values Altered", () => {
		 describe("From the Initial Implementation", () => {
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
						   for(const idx of [0, 1]) {
							  const whichElement = vec2D.at(idx);
							  expect(whichElement).toBeDefined();
						   }
						});
						test("Should consist of 2 elements.", () => {
						   expect(vec2DSize).toBe(N);
						});
						test("Should have each element typed as number.", () => {
						   for(const idx of [0, 1]) {
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
						const vec2DArr = [0, 1].map((_, idx) => vec2D.at(idx));
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
						   for(const idx of [0, 1]) {
							  const whichElement = vec2D.at(idx);
							  expect(whichElement).toBeDefined();
						   }
						});
						test("Should consist of 2 elements.", () => {
						   expect(vec2DSize).toBe(N);
						});
						test("Should have each element typed as number.", () => {
						   for(const idx of [0, 1]) {
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
						const vec2DArr = [0, 1].map((_, idx) => vec2D.at(idx));
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
						   for(const idx of [0, 1]) {
							  const whichElement = vec2D.at(idx);
							  expect(whichElement).toBeDefined();
						   }
						});
						test("Should consist of 2 elements.", () => {
						   expect(vec2DSize).toBe(N);
						});
						test("Should have each element typed as number.", () => {
						   for(const idx of [0, 1]) {
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
						const vec2DArr = [0, 1].map((_, idx) => vec2D.at(idx));
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
						   for(const idx of [0, 1]) {
							  const whichElement = vec2D.at(idx);
							  expect(whichElement).toBeDefined();
						   }
						});
						test("Should consist of 2 elements.", () => {
						   expect(vec2DSize).toBe(N);
						});
						test("Should have each element typed as number.", () => {
						   for(const idx of [0, 1]) {
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
						const vec2DArr = [0, 1].map((_, idx) => vec2D.at(idx));
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
						// the last vector checked above was [1, -1], so now we have [1, -1, 0].
						test.todo("Should have a direction, 'ϑ' of 'ᴨ/2' and 'ɸ' of 'ᴨ/4'.");
						test.todo("Should have a 'magnitude' of '√2'.");
					 });
					 describe("Its elements", () => {
						test("Should have elements that are not undefined.", () => {
						   for(const idx of [0, 1]) {
							  const whichElement = newVec2D.at(idx);
							  expect(whichElement).toBeDefined();
						   }
						});
						test("Should consist of 1 more element.", () => {
						   expect(newVec2DSize).toBe(N+1);
						});
						test("Should have each element typed as number.", () => {
						   for(const idx of [0, 1]) {
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
						const newVec2DArr = [0, 1, 2].map((_, idx) => newVec2D.at(idx));
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
						// the last vector checked above was [1, -1], so now we have [1, -1, 1].
						test.todo("Should have a direction, 'ϑ' of 'ᴨ/2' and 'ɸ' of 'ᴨ/4'.");
						test.todo("Should have a 'magnitude' of '√2'.");
					 });
					 describe("Its elements", () => {
						test("Should have elements that are not undefined.", () => {
						   for(const idx of [0, 1]) {
							  const whichElement = newVec2D.at(idx);
							  expect(whichElement).toBeDefined();
						   }
						});
						test("Should consist of 1 more element.", () => {
						   expect(newVec2DSize).toBe(N+1);
						});
						test("Should have each element typed as number.", () => {
						   for(const idx of [0, 1]) {
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
						const newVec2DArr = [0, 1, 2].map((_, idx) => newVec2D.at(idx));
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
						// the last vector checked above was [1, -1], so now we have [1, -1, 0].
						test.todo("Should have a direction, 'ϑ' of 'ᴨ/2' and 'ɸ' of 'ᴨ/4'.");
						test.todo("Should have a 'magnitude' of '√2'.");
					 });
					 describe("Its elements", () => {
						test("Should have elements that are not undefined.", () => {
						   for(const idx of [0, 1]) {
							  const whichElement = newVec2D.at(idx);
							  expect(whichElement).toBeDefined();
						   }
						});
						test("Should consist of 1 more element.", () => {
						   expect(newVec2DSize).toBe(N+1);
						});
						test("Should have each element typed as number.", () => {
						   for(const idx of [0, 1]) {
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
						const newVec2DArr = [0, 1, 2].map((_, idx) => newVec2D.at(idx));
						const countOccurrences = utility.utils.countOccurrences(newVec2DArr);
						const vec2DArrConsists = Object.values(countOccurrences).every(val => val == numsOnes || val == numsNegOne);
						expect(vec2DArrConsists).toBeTruthy();
					 });
				  });
			   });
			});
		 });
		 describe("By Operation from Non-All Zero Values", () => {
			let newVec2D: VectorND;
			let newVec2DSize: number;
			describe("Unary Operations", () => {
			   describe("Normalize", () => {
				  beforeAll(() => {
					 newVec2D = vec2D.normalize();
					 newVec2DSize = newVec2D.N;
				  });
				  describe("Set", () => {
					 describe("It", () => {
						test("Should not be undefined.", () => {
						   expect(vec2D).toBeDefined();
						});
						// TODO: fix values on direction & magnitude.
						test.todo("Should have a direction of '0'.");
						test.todo("Should have a 'magnitude' of '0'.");
						test("Should have elements that are not undefined.", () => {
						   for(const idx of [0, 1]) {
							  const whichElement = newVec2D.at(idx);
							  expect(whichElement).toBeDefined();
						   }
						});
					 });
					 describe("Its Elements", () => {
						test("Should consist of 2 elements.", () => {
						   expect(newVec2DSize).toBe(N);
						});
						test("Should have each element typed as number.", () => {
						   for(const idx of [0, 1]) {
							   const whichElement = newVec2D.at(idx);
							   expect(whichElement).toEqual(expect.any(Number));
						   }
						});
					 });
				  });
				  describe("Element Indexed", () => {
					 test("Should have elements all less than or equal to '1'.", () => {
						for(const idx of [0, 1]) {
						   const whichElement = newVec2D.at(idx);
						   expect(whichElement).toBeLessThanOrEqual(1);
						}
					 });
					 test("Should have a length of '1'.", () => {
						const expectedLength = 1;
						const length = newVec2D.length;
						expect(length).toBeCloseTo(expectedLength, 1);
					 });
				  });
			   });
			   describe("Scale", () => {
				  let scaleFactor: number;
				  beforeAll(() => {
					 scaleFactor = 2;
					 newVec2D = vec2D.scale(scaleFactor);
					 newVec2DSize = newVec2D.N;
				  });
				  describe("Set", () => {
					 describe("It", () => {
						test("Should not be undefined.", () => {
						   expect(vec2D).toBeDefined();
						});
						// TODO: fix values on direction & magnitude.
						test.todo("Should have a direction of '0'.");
						test.todo("Should have a 'magnitude' of '0'.");
						test("Should have elements that are not undefined.", () => {
						   for(const idx of [0, 1]) {
							  const whichElement = newVec2D.at(idx);
							  expect(whichElement).toBeDefined();
						   }
						});
					 });
					 describe("Its Elements", () => {
						test("Should consist of 2 elements.", () => {
						   expect(newVec2DSize).toBe(N);
						});
						test("Should have each element typed as number.", () => {
						   for(const idx of [0, 1]) {
							  const whichElement = newVec2D.at(idx);
							  expect(whichElement).toEqual(expect.any(Number));
						   }
						});
					 });
				  });
				  describe("Element Indexed", () => {
					 test("Should not equal to previous 'vector'.", () => {
						expect(newVec2D.toString()).not.toBe(vec2D.toString());
					 });
					 test("Should have a length of '2'.", () => {
						const expectedLength = 2;
						const length = newVec2D.length;
						expect(length).toBeCloseTo(expectedLength, 1);
					 });
				  });
			   });
			   describe("Negate", () => {
				  beforeAll(() => {
					 newVec2D = vec2D.negate();
					 newVec2DSize = newVec2D.N;
				  });
				  describe("Set", () => {
					 describe("It", () => {
						test("Should not be undefined.", () => {
						   expect(vec2D).toBeDefined();
						});
						// TODO: fix values on direction & magnitude.
						test.todo("Should have a direction of '0'.");
						test.todo("Should have a 'magnitude' of '0'.");
						test("Should have elements that are not undefined.", () => {
						   for(const idx of [0, 1]) {
							  const whichElement = newVec2D.at(idx);
							  expect(whichElement).toBeDefined();
						   }
						});
					 });
					 describe("Its Elements", () => {
						test("Should consist of 2 elements.", () => {
						   expect(newVec2DSize).toBe(N);
						});
						test("Should have each element typed as number.", () => {
						   for(const idx of [0, 1]) {
							  const whichElement = newVec2D.at(idx);
							  expect(whichElement).toEqual(expect.any(Number));
						   }
						});
					 });
				  });
				  describe("Element Indexed", () => {
					 test("Should not equal to previous 'vector'.", () => {
						expect(newVec2D.toString()).not.toBe(vec2D.toString());
					 });
					 test("Should consist of elements that are '-1' multiple of the length of the previous 'vector'.", () => {
						for(const idx of [0, 1]) {
						   const whichElement = newVec2D.at(idx);
						   const whichPrevElement = vec2D.normalize().at(idx);
						   const negatedPrevElement = -1 * whichPrevElement;
						   expect(whichElement).toBe(negatedPrevElement);
						}
					 });
				  });
			   });
			});
			describe("Binary Operations", () => {
			   describe("Combinations", () => {
				  beforeAll(() => {
				  });
				  describe("Addition", () => {
					 describe("Performed", () => {
						describe("It", () => {
						   test.todo("Should not be undefined.");
						   // TODO: fix values on direction & magnitude.
						   test.todo("Should have a direction of '0'.");
						   test.todo("Should have a 'magnitude' of '0'.");
						});
						describe("Its Elements", () => {
						   test.todo("Should have elements that are not undefined.");
						   test.todo("Should consist of 2 elements.");
						   test.todo("Should have each element typed as number.");
						});
					 });
					 describe("Element Indexed", () => {
						test.todo("Should not equal to either of the previous 'vector's.");
						test.todo("Should consist of elements that are the sum of the previous 'vector's elements.");
					 });
				  });
				  describe("Subtraction", () => {
					 describe("Performed", () => {
						describe("It", () => {
						   test.todo("Should not be undefined.");
						   // TODO: fix values on direction & magnitude.
						   test.todo("Should have a direction of '0'.");
						   test.todo("Should have a 'magnitude' of '0'.");
						});
						describe("Its Elements", () => {
						   test.todo("Should have elements that are not undefined.");
						   test.todo("Should consist of 2 elements.");
						   test.todo("Should have each element typed as number.");
						});
					 });
					 describe("Element Indexed", () => {
						test.todo("Should not equal to either of the previous 'vector's.");
						test.todo("Should consist of elements that are the difference of the previous 'vector's elements.");
					 });
				  });
			   });
			   describe("Dot Product", () => {
				  beforeAll(() => {
				  });
				  describe("Operation", () => {
					 describe("Performed", () => {
						test.todo("Should have a value that is not undefined.");
						test.todo("Should consist of a single value.");
						test.todo("Should have that value typed as number.");
					 });
					 describe("Calculated Value", () => {
						test.todo("Should be greater than the sum of any summed element of the 'vector's.");
						test.todo("Should have each addend as the product of each element of the 'vector's.");
						test.todo("Should be the 'dot product'.");
					 });
				  });
				  describe("Angle Between", () => {
					 describe("Performed", () => {
						test.todo("Should have a value that is not undefined.");
						test.todo("Should consist of a single value.");
						test.todo("Should have that value typed as number.");
					 });
					 describe("Element Indexed", () => {
						test.todo("Should not be perpendicular.");
						test.todo("Should not be greater than a straight angle.");
						test.todo("Should be the 'arccosine' of the 'dot product' divided by the product of the 'vector's magnitudes.");
						test.todo("Should be the 'angle between' the 'vector's.");
					 });
				  });
				  describe("Relative Location", () => {
					 describe("Performed", () => {
						test.todo("Should have a value that is not undefined.");
						test.todo("Should consist of a single value.");
						test.todo("Should have that value typed as boolean.");
					 });
					 describe("Element Indexed", () => {
						test.todo("Should not be at the same location.");
						test.todo("Should either be 'in front of' or 'behind' another vector.");
						test.todo("Should either be 'in front of' another vector or not.");
					 });
				  });
			   });
			   describe("Scalar Component", () => {
				  describe("Operation", () => {
					 describe("Performed", () => {
						test.todo("Should have a value that is not undefined.");
						test.todo("Should consist of a single value.");
						test.todo("Should have that value typed as number.");
					 });
					 describe("Element Indexed", () => {
						test.todo("Should not be perpendicular.");
						test.todo("Should not be greater than perpendicular.");
						test.todo("Should be the 'dot product' of the 'vector' and the other 'unit vector'.");
						test.todo("Should be the 'scalar component' of the 'vector'.");
					 });
				  });
			   });
			   describe("Cross Product", () => {
				  describe("Operation", () => {
					 describe("Performed", () => {
						test.todo("Should not be undefined.");
						test.todo("Should have elements that are not undefined.");
						test.todo("Should consist of 3 elements.");
						test.todo("Should have each element typed as number.");
					 });
					 describe("Calculated Value", () => {
						test.todo("Should be greater than the sum of any summed element of the 'vector's.");
						test.todo("Should have each addend as the determinant of the other column of the constructed '3 x 3' matrix' of the vectors.");
						test.todo("Should be the 'cross product'.");
					 });
				  });
				  describe("The Vector", () => {
					 describe("Angle Between", () => {
						test.todo("Should not be perpendicular.");
						test.todo("Should not be greater than a straight angle.");
						test.todo("Should be the 'arcsine' of the 'cross product' divided by the product of the 'vector's magnitudes.");
						test.todo("Should be the 'angle between' the 'vector's.");
					 });
					 describe("Direction", () => {
						test.todo("Should be perpendicular to each of the previous 'vector's.");
						test.todo("Should be the direction of the 'unit vector' of the 'cross product'.");
					 });
					 describe("Magnitude", () => {
						test.todo("Should be greater than both the magnitudes of each 'vector'.");
						test.todo("Should be equal to the area of the 'parallelgram' determined by the 'vector's.");
					 });
				  });
			   });
			});
		 });
	  });
   });
});
