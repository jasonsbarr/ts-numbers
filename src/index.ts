// Explanation from original js-numbers package (note that this is from before JavaScript had the bigint type):
// The numeric tower has the following levels:
//     integers
//     rationals
//     floats
//     complex numbers
//
// with the representations:
//     integers: fixnum or BigInteger [level=0]
//     rationals: Rational [level=1]
//     floats: FloatPoint [level=2]
//     complex numbers: Complex [level=3]

// We try to stick with the unboxed fixnum representation for
// integers, since that's what scheme programs commonly deal with, and
// we want that common type to be lightweight.

// A boxed-scheme-number is either BigInteger, Rational, FloatPoint, or Complex.
// An integer-scheme-number is either fixnum or BigInteger.
import { Complex } from "./types/Complex";
import { Float } from "./types/Float";
import { Integer } from "./types/Integer";
import { Rational } from "./types/Rational";

export { Complex, Float, Integer, Rational };
