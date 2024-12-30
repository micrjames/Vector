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
