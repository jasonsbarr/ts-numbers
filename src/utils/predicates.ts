import { Levels } from "../types/Levels";
import { NumberType } from "../types/NumberType";

export function isComplex(n: NumberType): boolean {
  return (
    typeof n !== "number" && typeof n !== "bigint" && n.level === Levels.Complex
  );
}

export function isRational(n: NumberType): boolean {
  return (
    typeof n !== "number" &&
    typeof n !== "bigint" &&
    n.level === Levels.Rational
  );
}

export function isFloat(n: NumberType): boolean {
  if (typeof n === "number") {
    return !Number.isInteger(n);
  } else if (typeof n === "bigint") {
    return false;
  }

  return n.level === Levels.Float;
}

export function isInteger(n: NumberType): boolean {
  if (typeof n === "number") {
    return Number.isInteger(n);
  } else if (typeof n === "bigint") {
    return true;
  }

  return n.level === Levels.Integer;
}

export function isOverflow(n: number): boolean {
  return n > Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER;
}

export function isFinite(n: number): boolean {
  return Number.isFinite(n);
}
