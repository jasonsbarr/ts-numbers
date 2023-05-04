import { BoxedNumber } from "./BoxedNumber";
import { Levels } from "./Levels";
import { stringToInt } from "src/utils/conversion";
import { makeBignum } from "src/utils/constructors";

export class Integer implements BoxedNumber {
  public static ZERO = makeBignum(0);
  public static ONE = makeBignum(1);

  public level: Levels;
  public n: number | bigint;

  constructor(n: number | bigint | string) {
    this.n = typeof n === "string" ? stringToInt(n) : n;
    this.level = Levels.Integer;
  }

  public static create(n: number | bigint | string) {
    return new Integer(n);
  }
}
