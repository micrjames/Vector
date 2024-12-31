import { StringBuilder } from "./StringBuilder/StringBuilder";
import { Utilities } from "./Utilities/Utilities";

export class VectorND {
   private _vec: number[];
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
	  return new VectorND(this.N);
   }

   normalize(): VectorND {
	  return new VectorND(this.N);
   }

   scale(scale: number): VectorND {
	  return new VectorND(this.N);
   }

   negate(): VectorND {
	  return new VectorND(this.N);
   }

   private operateOnAllValues(operation: (val: number, index: number) => number): VectorND {
	  return new VectorND(this.N);
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
