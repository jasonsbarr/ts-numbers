import { BoxedNumber } from "./BoxedNumber";
import { Levels } from "./Levels";

export class Float implements BoxedNumber {
  public level: Levels;

  public constructor(public n: number) {
    this.level = Levels.Float;
  }
}
