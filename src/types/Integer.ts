import { makeBignum } from "src/utils/conversion";
import { BoxedNumber } from "./BoxedNumber";
import { Levels } from "./Levels";

export class Integer implements BoxedNumber {
  public static ZERO = makeBignum(0);
  public static ONE = makeBignum(1);

  public level: Levels;

  constructor(public n: number | bigint) {
    this.level = Levels.Integer;
  }
}
