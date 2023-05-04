import { Number } from "src/types/Number";
import { BoxedNumber } from "src/types/BoxedNumber";
import { Integer } from "src/types/Integer";
import { makeBignum, makeFixnum, numerator, realPart } from "./conversion";
import { isComplex, isFloat, isOverflow, isRational } from "./predicates";

type OnFixnumsUnary = (n: number) => any;
type OnBignumsUnary = (n: Number) => any;

export function makeIntegerUnOp(
  onFixnums: OnFixnumsUnary,
  onBignums: OnBignumsUnary,
  options = { ignoreOverflow: false }
) {
  return (m: Number) => {
    if (isRational(m)) {
      m = numerator(m);
    } else if (isComplex(m)) {
      m = realPart(m);
    } else if (isFloat(m)) {
      return onFixnums(makeFixnum(m));
    }

    if (typeof m === "number") {
      const result = onFixnums(m);

      if (!isOverflow(result) || options.ignoreOverflow) {
        return result;
      }

      m = makeBignum(m);
    }

    if (typeof m === "bigint") {
      m = makeBignum(m);
    }

    return onBignums(m);
  };
}

export const integerIsOne = makeIntegerUnOp(
  (n) => n === 1,
  (n) => {
    if (typeof n === "bigint") {
      return n === 1n;
    }

    return (n as BoxedNumber).equals(Integer.ONE);
  }
);
