import { BoxedNumber } from "./BoxedNumber";
import { Levels } from "./Levels";

export class Complex implements BoxedNumber {
  public level: Levels;

  public constructor(public r: number, public i: number) {
    this.level = Levels.Complex;
  }
}
