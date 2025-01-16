import { VectorND } from "../VectorND";
import { Range } from "../Range/range";
import { Utilities } from "../Utilities/Utilities";

export const test_operations = () => {
   let N: number;
   let vec2D: VectorND;
   let vec2DSize: number;
   let utility: Utilities;
   let newValues: number[];
   beforeAll(() => {
	  N = 2;
	  vec2D = new VectorND(N);
	  vec2DSize = vec2D.N;
	  utility = new Utilities();
	  newValues = [1, -1];
	  vec2D.values = newValues;
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
				  test("Should have a direction, 'ɸ' of '-ᴨ/4' and 'ϑ' of 'ᴨ/2.'", () => {
					 const direction = newVec2D.direction;
					 const phi = direction[0];
					 const theta = direction[1]; 
					 expect(phi).toBe(-Math.PI/4);
					 expect(theta).toBeUndefined();
				  });
				  test("Should have a 'magnitude' of '√2'.", () => {
					 const magnitude = vec2D.length;
					 const sqrt2 = Math.sqrt(2);
					 expect(magnitude).toBe(sqrt2);
				  });
				  test("Should have elements that are not undefined.", () => {
					 for(const idx of [...new Range(N)]) {
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
					 for(const idx of [...new Range(N)]) {
						 const whichElement = newVec2D.at(idx);
						 expect(whichElement).toEqual(expect.any(Number));
					 }
				  });
			   });
			});
			describe("Element Indexed", () => {
			   test("Should have elements all less than or equal to '1'.", () => {
				  for(const idx of [...new Range(N)]) {
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
		 describe("Equals", () => {
			let vecs: VectorND[];
			let otherVec2D: VectorND;
			let otherVec2DSize: number;
			beforeAll(() => {
			   otherVec2D = new VectorND(N);
			   otherVec2D.values = newValues; 
			   otherVec2DSize = otherVec2D.N;
			   vecs = [vec2D, otherVec2D];
			});
			describe("Each", () => {
			   let vec2DMagnitude: number;
			   let otherVec2DMagnitude: number;
			   let vec2DDirection: number;
			   let otherVec2DDirection: number;
			   beforeAll(() => {
				  vec2DMagnitude = vec2D.length;
				  otherVec2DMagnitude = otherVec2D.length;
				  vec2DDirection = vec2D.direction.at(0);
				  otherVec2DDirection = otherVec2D.direction.at(0);
			   });
			   test("Should not be undefined.", () => {
				  for(let vec of vecs)
					 expect(vec).toBeDefined();
			   });
			   test("Should have the same direction.", () => {
				  expect(vec2DDirection).toEqual(otherVec2DDirection);
			   });
			   test("Should have the same 'magnitude'.", () => {
				  expect(vec2DMagnitude).toEqual(otherVec2DMagnitude);
			   });
			});
			describe("Their elements", () => {
			   let whichElement: number;
			   test("Should have elements that are not undefined.", () => {
				  for(let vec of vecs)
					 for(const idx of [...new Range(N)]) {
						whichElement = vec.at(idx);
						expect(whichElement).toBeDefined();
					 }
			   });
			   test("Should consist of 2 elements.", () => {
				  expect(vec2DSize).toBe(N);
				  expect(otherVec2DSize).toBe(N);
			   });
			   test("Should have each element typed as number.", () => {
				  for(let vec of vecs)
					 for(const idx of [...new Range(N)]) {
						whichElement = vec2D.at(idx);
						expect(whichElement).toEqual(expect.any(Number));
					 }
			   });
			});
			describe("The Vectors", () => {
			   test("Should be 'equal'.", () => {
				  const areVecsEqual = vec2D.equals(otherVec2D);
				  expect(areVecsEqual).toBeTruthy();
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
				  test("Should have a direction, 'ɸ' of '-ᴨ/4' and 'ϑ' of 'ᴨ/2.'", () => {
					 const direction = newVec2D.direction;
					 const phi = direction[0];
					 const theta = direction[1]; 
					 expect(phi).toBe(-Math.PI/4);
					 expect(theta).toBeUndefined();
				  });
				  test("Should have a 'magnitude' of '√2'.", () => {
					 const magnitude = vec2D.length;
					 const sqrt2 = Math.sqrt(2);
					 expect(magnitude).toBe(sqrt2);
				  });
				  test("Should have elements that are not undefined.", () => {
					 for(const idx of [...new Range(N)]) {
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
					 for(const idx of [...new Range(N)]) {
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
				  test("Should have a direction, 'ɸ' of '-ᴨ/4' and 'ϑ' of 'ᴨ/2.'", () => {
					 const direction = newVec2D.direction;
					 const phi = direction[0];
					 const theta = direction[1]; 
					 expect(phi).toBe(-Math.PI/4);
					 expect(theta).toBeUndefined();
				  });
				  test("Should have a 'magnitude' of '√2'.", () => {
					 const magnitude = vec2D.length;
					 const sqrt2 = Math.sqrt(2);
					 expect(magnitude).toBe(sqrt2);
				  });
				  test("Should have elements that are not undefined.", () => {
					 for(const idx of [...new Range(N)]) {
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
					 for(const idx of [...new Range(N)]) {
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
				  for(const idx of [...new Range(N)]) {
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
};
