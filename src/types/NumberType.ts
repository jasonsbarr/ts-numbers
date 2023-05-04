import { Complex } from "./Complex";
import { Float } from "./Float";
import { Integer } from "./Integer";
import { Rational } from "./Rational";

export type NumberType = number | bigint | Complex | Float | Rational | Integer;
