import { BoxedNumber } from "./BoxedNumber";
import { Levels } from "./Levels";
import { NumberType } from "./NumberType";

export class Complex implements BoxedNumber {
  public level: Levels;

  public constructor(public r: NumberType, public i: NumberType) {
    this.level = Levels.Complex;
  }

  public static create(r: NumberType, i: NumberType) {
    return new Complex(r, i);
  }

  // Comparison
  greaterThan(other: NumberType): boolean {}
  greaterThanOrEqual(other: NumberType): boolean {}
  lessThan(other: NumberType): boolean {}
  lessThanOrEqual(other: NumberType): boolean {}
  equals(other: NumberType): boolean {}

  // Operations
  add(other: NumberType): BoxedNumber {}
  subtract(other: NumberType): BoxedNumber {}
  multiply(other: NumberType): BoxedNumber {}
  divide(other: NumberType): BoxedNumber {}
  expt(other: NumberType): BoxedNumber {}
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
