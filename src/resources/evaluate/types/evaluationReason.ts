/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "../../..";

export interface evaluationReason<RawValue extends evaluationReason.RawValue = evaluationReason.RawValue> {
  value: RawValue;
  visit: <_Result>(visitor: FliptApi.evaluate.evaluationReason._Visitor<_Result>) => _Result;
}

const _UnknownEvaluationReason: evaluationReason<"UNKNOWN_EVALUATION_REASON"> = {
  value: "UNKNOWN_EVALUATION_REASON",
  visit: (visitor) => visitor.unknownEvaluationReason(),
};
const _FlagDisabledEvaluationReason: evaluationReason<"FLAG_DISABLED_EVALUATION_REASON"> = {
  value: "FLAG_DISABLED_EVALUATION_REASON",
  visit: (visitor) => visitor.flagDisabledEvaluationReason(),
};
const _FlagNotFoundEvaluationReason: evaluationReason<"FLAG_NOT_FOUND_EVALUATION_REASON"> = {
  value: "FLAG_NOT_FOUND_EVALUATION_REASON",
  visit: (visitor) => visitor.flagNotFoundEvaluationReason(),
};
const _MatchEvaluationReason: evaluationReason<"MATCH_EVALUATION_REASON"> = {
  value: "MATCH_EVALUATION_REASON",
  visit: (visitor) => visitor.matchEvaluationReason(),
};
const _ErrorEvaluationReason: evaluationReason<"ERROR_EVALUATION_REASON"> = {
  value: "ERROR_EVALUATION_REASON",
  visit: (visitor) => visitor.errorEvaluationReason(),
};
export const evaluationReason = {
  UnknownEvaluationReason: _UnknownEvaluationReason,
  FlagDisabledEvaluationReason: _FlagDisabledEvaluationReason,
  FlagNotFoundEvaluationReason: _FlagNotFoundEvaluationReason,
  MatchEvaluationReason: _MatchEvaluationReason,
  ErrorEvaluationReason: _ErrorEvaluationReason,
  _parse: (value: string): evaluationReason => {
    switch (value) {
      case "UNKNOWN_EVALUATION_REASON": {
        return _UnknownEvaluationReason;
      }
      case "FLAG_DISABLED_EVALUATION_REASON": {
        return _FlagDisabledEvaluationReason;
      }
      case "FLAG_NOT_FOUND_EVALUATION_REASON": {
        return _FlagNotFoundEvaluationReason;
      }
      case "MATCH_EVALUATION_REASON": {
        return _MatchEvaluationReason;
      }
      case "ERROR_EVALUATION_REASON": {
        return _ErrorEvaluationReason;
      }
      default: {
        return {
          value: value as evaluationReason.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace evaluationReason {
  type RawValue =
    | "UNKNOWN_EVALUATION_REASON"
    | "FLAG_DISABLED_EVALUATION_REASON"
    | "FLAG_NOT_FOUND_EVALUATION_REASON"
    | "MATCH_EVALUATION_REASON"
    | "ERROR_EVALUATION_REASON";

  interface _Visitor<_Result> {
    unknownEvaluationReason: () => _Result;
    flagDisabledEvaluationReason: () => _Result;
    flagNotFoundEvaluationReason: () => _Result;
    matchEvaluationReason: () => _Result;
    errorEvaluationReason: () => _Result;
    _other: (value: string) => _Result;
  }
}