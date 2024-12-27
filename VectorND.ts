import { StringBuilder } from "./StringBuilder/StringBuilder";

export class VectorND {
   private _vec: number[][];
   private N: number;

   constructor(N: number) {
	  this.N = N;
	  this.clear();
   }

   private set() {
	  this._vec = Array(this.N).fill(0);
   }

   clear() {
	  this._vec = [];
	  this.set();
   }

   toString() {
   }
}
