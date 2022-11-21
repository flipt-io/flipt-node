/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";

/**
 * The default is UNKNOWN_COMPARISON_TYPE
 */
export interface ConstraintComparisonType<
  RawValue extends ConstraintComparisonType.RawValue = ConstraintComparisonType.RawValue
> {
  value: RawValue;
  visit: <_Result>(visitor: FliptApi.ConstraintComparisonType._Visitor<_Result>) => _Result;
}

const _UnknownComparisonType: ConstraintComparisonType<"UNKNOWN_COMPARISON_TYPE"> = {
  value: "UNKNOWN_COMPARISON_TYPE",
  visit: (visitor) => visitor.unknownComparisonType(),
};
const _StringComparisonType: ConstraintComparisonType<"STRING_COMPARISON_TYPE"> = {
  value: "STRING_COMPARISON_TYPE",
  visit: (visitor) => visitor.stringComparisonType(),
};
const _NumberComparisonType: ConstraintComparisonType<"NUMBER_COMPARISON_TYPE"> = {
  value: "NUMBER_COMPARISON_TYPE",
  visit: (visitor) => visitor.numberComparisonType(),
};
const _BooleanComparisonType: ConstraintComparisonType<"BOOLEAN_COMPARISON_TYPE"> = {
  value: "BOOLEAN_COMPARISON_TYPE",
  visit: (visitor) => visitor.booleanComparisonType(),
};
export const ConstraintComparisonType = {
  UnknownComparisonType: _UnknownComparisonType,
  StringComparisonType: _StringComparisonType,
  NumberComparisonType: _NumberComparisonType,
  BooleanComparisonType: _BooleanComparisonType,
  _parse: (value: string): ConstraintComparisonType => {
    switch (value) {
      case "UNKNOWN_COMPARISON_TYPE": {
        return _UnknownComparisonType;
      }
      case "STRING_COMPARISON_TYPE": {
        return _StringComparisonType;
      }
      case "NUMBER_COMPARISON_TYPE": {
        return _NumberComparisonType;
      }
      case "BOOLEAN_COMPARISON_TYPE": {
        return _BooleanComparisonType;
      }
      default: {
        return {
          value: value as ConstraintComparisonType.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace ConstraintComparisonType {
  type RawValue =
    | "UNKNOWN_COMPARISON_TYPE"
    | "STRING_COMPARISON_TYPE"
    | "NUMBER_COMPARISON_TYPE"
    | "BOOLEAN_COMPARISON_TYPE";

  interface _Visitor<_Result> {
    unknownComparisonType: () => _Result;
    stringComparisonType: () => _Result;
    numberComparisonType: () => _Result;
    booleanComparisonType: () => _Result;
    _other: (value: string) => _Result;
  }
}
