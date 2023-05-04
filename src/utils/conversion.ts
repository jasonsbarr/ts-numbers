import { BoxedNumber } from "src/types/BoxedNumber";
import { Number } from "src/types/Number";

export function makeBignum(n: Number): BoxedNumber {}

export function makeFixnum(n: Number): number {}

export function numerator(n: Number) {
  if (typeof n === "number") {
    return n;
  } else if (typeof n === "bigint") {
    return n;
  }

  return n.numerator();
}

export function realPart(n: Number) {
  if (typeof n === "number") {
    return n;
  } else if (typeof n === "bigint") {
    return n;
  }

  return n.realPart();
}
