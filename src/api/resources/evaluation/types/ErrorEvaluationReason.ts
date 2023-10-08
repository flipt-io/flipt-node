/**
 */

export type ErrorEvaluationReason = "UNKNOWN_ERROR_EVALUATION_REASON" | "NOT_FOUND_ERROR_EVALUATION_REASON";

export const ErrorEvaluationReason = {
    UnknownErrorEvaluationReason: "UNKNOWN_ERROR_EVALUATION_REASON",
    NotFoundErrorEvaluationReason: "NOT_FOUND_ERROR_EVALUATION_REASON",
} as const;
