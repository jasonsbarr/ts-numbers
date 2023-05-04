import { BoxedNumber } from "src/types/BoxedNumber";
import { Levels } from "src/types/Levels";

export function isComplex(n: number | bigint | BoxedNumber) {
  return (
    typeof n !== "number" && typeof n !== "bigint" && n.level === Levels.Complex
  );
}

export function isRational(n: number | bigint | BoxedNumber) {
  return (
    typeof n !== "number" &&
    typeof n !== "bigint" &&
    n.level === Levels.Rational
  );
}

export function isFloat(n: number | bigint | BoxedNumber) {
  if (typeof n === "number") {
    return !Number.isInteger(n);
  } else if (typeof n === "bigint") {
    return false;
  }

  return n.level === Levels.Float;
}

export function isInteger(n: number | bigint | BoxedNumber) {
  if (typeof n === "number") {
    return Number.isInteger(n);
  } else if (typeof n === "bigint") {
    return true;
  }

  return n.level === Levels.Integer;
}

export function isOverflow(n: number) {
  return n > Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER;
}
