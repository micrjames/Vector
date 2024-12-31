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
   describe("Created and", () => {
	  describe("Implemented initially with all zeroes.", () => {
		 test("Should not be undefined.", () => {
			expect(vec2D).toBeDefined();
		 });
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
	  describe("An Element Indexed", () => {
		 describe("Within Range", () => {
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
				  const whichElement = vec2D.at(idx);
				  if(whichElement === element) vec2DArr.push(element);
			   }
			   expect(vec2DArr).toHaveLength(vec2DSize);
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
	  describe("Values Altered", () => {
		 describe("From the Initial Implementation", () => {
			describe("With All New Values", () => {
			   let newValues: number[];
			   beforeAll(() => {
				  newValues = [1, 1];
				  vec2D.values = newValues;
				  console.log(vec2D.toString());
			   });
			   describe("Set", () => {
				  test("Should not be undefined.", () => {
					 expect(vec2D).toBeDefined();
				  });
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
			   describe("Elements Indexed", () => {
				  test("Should have a 'one' as the first element.", () => {
					 const elementIdx = 0;
					 const element = 1;
					 const isZero1stElement = vec2D.indexOf(element) === elementIdx;
					 expect(isZero1stElement).toBeTruthy();
				  });
				  test("Should consist of a two element set of all ones.", () => {
					 const element = 1;
					 let vec2DArr: number[] = [];
					 for(const idx of [0, 1]) {
						const whichElement = vec2D.at(idx);
						if(whichElement === element) vec2DArr.push(element);
					 }
					 expect(vec2DArr).toHaveLength(vec2DSize);
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
			describe("With New Value", () => {
			   let newVec2D: VectorND;
			   let newValue: number;
			   beforeAll(() => {
				  newValue = 0;
				  newVec2D = vec2D.addAValue(newValue);
			   });
			   describe("Set", () => {
				  test.todo("Should not be undefined.");
				  test.todo("Should have elements that are not undefined.");
				  test.todo("Should consist of 3 elements.");
				  test.todo("Should have each element typed as number.");
			   });
			   describe("Element Indexed", () => {
				  test.todo("Should have a 'zero' as the last element.");
				  test.todo("Should consist of a three element set of all zeros.");
			   });
			});
		 });
		 describe("By Operations from Non-All Zero Values", () => {
			let newVec2D: VectorND;
			describe("Normalize", () => {
			   beforeAll(() => {
				  newVec2D = vec2D.normalize();
			   });
			   describe("Set", () => {
				  test.todo("Should not be undefined.");
				  test.todo("Should have elements that are not undefined.");
				  test.todo("Should consist of 2 elements.");
				  test.todo("Should have each element typed as number.");
			   });
			   describe("Element Indexed", () => {
				  test.todo("Should have elements all less than 1.");
				  test.todo("Should consist of elements that sum to 1.");
			   });
			});
			describe("Scale", () => {
			   let scaleFactor: number;
			   beforeAll(() => {
				  newVec2D = vec2D.scale(scaleFactor);
			   });
			   describe("Set", () => {
				  test.todo("Should not be undefined.");
				  test.todo("Should have elements that are not undefined.");
				  test.todo("Should consist of 3 elements.");
				  test.todo("Should have each element typed as number.");
			   });
			   describe("Element Indexed", () => {
				  test.todo("Should not equal to previous 'vector'.");
				  test.todo("Should consist of elements that are 'scaleFactor' multiple of the previous 'vector'.");
			   });
			});
			describe("Negate", () => {
			   beforeAll(() => {
				  newVec2D = vec2D.negate();
			   });
			   describe("Set", () => {
				  test.todo("Should not be undefined.");
				  test.todo("Should have elements that are not undefined.");
				  test.todo("Should consist of 3 elements.");
				  test.todo("Should have each element typed as number.");
			   });
			   describe("Element Indexed", () => {
				  test.todo("Should not equal to previous 'vector'.");
				  test.todo("Should consist of elements that are '-1' multiple of the previous 'vector'.");
			   });
			});
		 });
	  });
   });
});
