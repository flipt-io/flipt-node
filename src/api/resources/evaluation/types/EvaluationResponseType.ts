/**
 */

export type EvaluationResponseType =
    | "VARIANT_EVALUATION_RESPONSE_TYPE"
    | "BOOLEAN_EVALUATION_RESPONSE_TYPE"
    | "ERROR_EVALUATION_RESPONSE_TYPE";

export const EvaluationResponseType = {
    VariantEvaluationResponseType: "VARIANT_EVALUATION_RESPONSE_TYPE",
    BooleanEvaluationResponseType: "BOOLEAN_EVALUATION_RESPONSE_TYPE",
    ErrorEvaluationResponseType: "ERROR_EVALUATION_RESPONSE_TYPE",
} as const;
