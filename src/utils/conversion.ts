import { NumberType } from "../types/NumberType";
import { isOverflow } from "./predicates";
import { makeBignum } from "./constructors";

export function numerator(n: NumberType) {
  if (typeof n === "number") {
    return n;
  } else if (typeof n === "bigint") {
    return makeBignum(n);
  }

  return n.numerator();
}

export function realPart(n: NumberType) {
  if (typeof n === "number") {
    return n;
  } else if (typeof n === "bigint") {
    return makeBignum(n);
  }

  return n.realPart();
}

export function stringToInt(s: string, radix = 10): number | bigint {
  const result = parseInt(s, radix);

  if (isOverflow(result)) {
    return BigInt(s);
  }

  return result;
}
