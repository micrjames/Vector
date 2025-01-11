import { StringBuilder } from "./StringBuilder/StringBuilder";
import { Utilities } from "./Utilities/Utilities";
import { Range } from "./Range/range";

export class VectorND {
   private _vec: number[] = [];
   private _N: number;
   private utility: Utilities;

   constructor(N: number) {
	  this._N = N;
	  this.reset();

	  this.utility = new Utilities();
   }

   private set() {
	  this._vec = Array(this.N).fill(0);
   }

   at(index: number): number {
	  if(index < 0 || index > this.N-1) throw new Error("Index Out of Range");
	  return this._vec[index];
   }
   indexOf(element: number): number {
	  return this._vec.indexOf(element);
   }

   reset() {
	  this._vec = [];
	  this.set();
   }

   get N(): number {
	  return this._N;
   }

   set values(newValues: number[]) {
	  if(newValues.length > this.N)
		 throw new Error("Too Many Elements in Vector");

	  this._vec = newValues;
   }

   addAValue(newValue: number): VectorND {
	  // create an array for the elements of the Vector
	  const range = new Range(this.N);
	  let vecValueArr: number[] = [];
	  for(const idx of [...range])
		 vecValueArr.push(this.at(idx));

	  // adding a value to the vector, so create a new vector with a size of one more.
	  vecValueArr.push(newValue);
	  const newVector = new VectorND(this.N+1);
	  newVector.values = vecValueArr;

	  return newVector;
   }

   get direction(): [number, number] | [number, undefined] {
	  let phi: number;
	  let theta: number;
	  
	  if (this._vec[0] == 0)
		 throw Error("Zero Vector, No Direction");
	  else
	     phi = Math.atan(this._vec[1]/this._vec[0]);
	  theta = this.N == 2 ? theta : Math.acos(this._vec[2]/this.length);

	  return [phi, theta];
   }

   get length(): number {
	  // r.
	  const length_squared = this._vec.map(els => els ** 2).reduce((sum, curr) => sum + curr);
	  return  Math.sqrt(length_squared);
   }

   normalize(): VectorND {
	  const length =  this.length;
	  const normedVector = new VectorND(this.N);

	  const range = new Range(this.N);
	  let vecValueArr: number[] = [];
	  for(const idx of [...range])
		 vecValueArr.push(this.at(idx)/length);
	  normedVector.values = vecValueArr;

	  return normedVector;
   }

   scale(factor: number): VectorND {
	  const scaledVector = new VectorND(this.N);
	  const normedVector = this.normalize();

	  const range = new Range(this.N);
	  let vecValueArr: number[] = [];
	  for(const idx of [...range])
		 vecValueArr.push(factor * normedVector.at(idx));
	  scaledVector.values = vecValueArr;

	  return scaledVector;
   }

   negate(): VectorND {
	  return this.scale(-1);
   }

   equals(otherVec: VectorND): boolean {
	  return false;
   }

   toString(): String {
	  let sb = new StringBuilder();
	  sb.append('[');
	  this.utility.iterate.iterate(this._vec, (el, idx) => {
		 if(idx != 0) sb.appendSp();
		 sb.append(`${el}`);
		 if(idx != this.N-1) sb.appendComma();
	  });
	  sb.append(']');

	  return sb.build();
   }
}
