import { NumberType } from "../types/NumberType";
import { Integer } from "../types/Integer";

export function makeBignum(n: string | number | bigint | Integer): Integer {
  if (typeof n === "number" || typeof n === "string" || typeof n === "bigint") {
    return Integer.create(n);
  }

  return n;
}

export function makeFixnum(n: NumberType): number {
  if (typeof n === "number") {
    return n;
  } else if (typeof n === "bigint") {
    return Number(n);
  }

  return n.toFixnum();
}
