/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const ErrorEvaluationReason: core.serialization.Schema<
    serializers.evaluation.ErrorEvaluationReason.Raw,
    FliptApi.evaluation.ErrorEvaluationReason
> = core.serialization.enum_(["UNKNOWN_ERROR_EVALUATION_REASON", "NOT_FOUND_ERROR_EVALUATION_REASON"]);

export declare namespace ErrorEvaluationReason {
    type Raw = "UNKNOWN_ERROR_EVALUATION_REASON" | "NOT_FOUND_ERROR_EVALUATION_REASON";
}
