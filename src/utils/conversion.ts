import { Integer } from "src/types/Integer";
import { Number } from "src/types/Number";

export function makeBignum(n: Number): Integer {}

export function makeFixnum(n: Number): number {
  if (typeof n === "number") {
    return n;
  } else if (typeof n === "bigint") {
    return Number(n);
  }

  return n.toFixnum();
}

export function numerator(n: Number) {
  if (typeof n === "number") {
    return n;
  } else if (typeof n === "bigint") {
    return makeBignum(n);
  }

  return n.numerator();
}

export function realPart(n: Number) {
  if (typeof n === "number") {
    return n;
  } else if (typeof n === "bigint") {
    return makeBignum(n);
  }

  return n.realPart();
}
