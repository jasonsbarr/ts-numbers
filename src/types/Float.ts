import { BoxedNumber } from "./BoxedNumber";
import { Levels } from "./Levels";

export class Float implements BoxedNumber {
  public level: Levels;

  public constructor(public n: number) {
    this.level = Levels.Float;
  }

  public static create(n: number) {
    return new Float(n);
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
