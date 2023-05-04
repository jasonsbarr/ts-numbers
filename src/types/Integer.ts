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

  // Comparison
  greaterThan(other: BoxedNumber): boolean {}
  greaterThanOrEqual(other: BoxedNumber): boolean {}
  lessThan(other: BoxedNumber): boolean {}
  lessThanOrEqual(other: BoxedNumber): boolean {}
  equals(other: BoxedNumber): boolean {}

  // Operations
  add(other: BoxedNumber): BoxedNumber {}
  subtract(other: BoxedNumber): BoxedNumber {}
  multiply(other: BoxedNumber): BoxedNumber {}
  divide(other: BoxedNumber): BoxedNumber {}
  expt(other: BoxedNumber): BoxedNumber {}
  numerator(): BoxedNumber {}
  denominator(): BoxedNumber {}
  integerSqrt(): BoxedNumber {}
  sqrt(): BoxedNumber {}
  floor(): BoxedNumber {}
  ceiling(): BoxedNumber {}
  conjugate(): BoxedNumber {}
  magnitude(): BoxedNumber {}
  log(): BoxedNumber {}
  angle(): BoxedNumber {}
  atan(): BoxedNumber {}
  cos(): BoxedNumber {}
  sin(): BoxedNumber {}
  exp(): BoxedNumber {}
  acos(): BoxedNumber {}
  asin(): BoxedNumber {}
  imaginaryPart(): BoxedNumber {}
  realPart(): BoxedNumber {}
  round(): BoxedNumber {}

  // Predicates
  isFinite(): boolean {}
  isInteger(): boolean {}
  isRational(): boolean {}
  isReal(): boolean {}
  isExact(): boolean {}

  // Conversion
  liftTo(n: BoxedNumber): BoxedNumber {}
  toExact(): BoxedNumber {}
  toJSNum(): number {}
  toFixnum(): number {}
  toString(): number {}
}
