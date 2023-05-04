import { NumberType } from "../types/NumberType";
import { BoxedNumber } from "../types/BoxedNumber";
import { Integer } from "../types/Integer";
import { numerator, realPart } from "./conversion";
import { isComplex, isFloat, isOverflow, isRational } from "./predicates";
import { makeBignum, makeFixnum } from "./constructors";

type OnFixnumsUnary = (n: number) => any;
type OnBignumsUnary = (n: NumberType) => any;

export function makeIntegerUnOp(
  onFixnums: OnFixnumsUnary,
  onBignums: OnBignumsUnary,
  options = { ignoreOverflow: false }
) {
  return (m: NumberType) => {
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

    return n.equals(Integer.ONE);
  }
);
