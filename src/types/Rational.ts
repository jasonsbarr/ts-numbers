import { BoxedNumber } from "./BoxedNumber";
import { Levels } from "./Levels";

export class Rational implements BoxedNumber {
  public level: Levels;

  constructor(public n: number, public d: number) {
    this.level = Levels.Rational;
  }

  public toString(): string {}
}
