import { Number } from "src/types/Number";
import { BoxedNumber } from "../types/BoxedNumber";
import { makeBignum, makeFixnum, numerator, realPart } from "./conversion";
import { isComplex, isFloat, isOverflow, isRational } from "./predicates";

type OnFixnums = (n: number) => number;
type OnBignums = (n: Number) => BoxedNumber;

export function makeIntegerUnOp(
  onFixnums: OnFixnums,
  onBignums: OnBignums,
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

// export const integerIsOne;
