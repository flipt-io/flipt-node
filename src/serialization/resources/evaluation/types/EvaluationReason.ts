/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const EvaluationReason: core.serialization.Schema<
    serializers.evaluation.EvaluationReason.Raw,
    FliptApi.evaluation.EvaluationReason
> = core.serialization.enum_([
    "UNKNOWN_EVALUATION_REASON",
    "FLAG_DISABLED_EVALUATION_REASON",
    "MATCH_EVALUATION_REASON",
    "DEFAULT_EVALUATION_REASON",
]);

export declare namespace EvaluationReason {
    type Raw =
        | "UNKNOWN_EVALUATION_REASON"
        | "FLAG_DISABLED_EVALUATION_REASON"
        | "MATCH_EVALUATION_REASON"
        | "DEFAULT_EVALUATION_REASON";
}
