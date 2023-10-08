/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const EvaluationReason: core.serialization.Schema<serializers.EvaluationReason.Raw, FliptApi.EvaluationReason> =
    core.serialization.enum_([
        "UNKNOWN_EVALUATION_REASON",
        "FLAG_DISABLED_EVALUATION_REASON",
        "FLAG_NOT_FOUND_EVALUATION_REASON",
        "MATCH_EVALUATION_REASON",
        "ERROR_EVALUATION_REASON",
    ]);

export declare namespace EvaluationReason {
    type Raw =
        | "UNKNOWN_EVALUATION_REASON"
        | "FLAG_DISABLED_EVALUATION_REASON"
        | "FLAG_NOT_FOUND_EVALUATION_REASON"
        | "MATCH_EVALUATION_REASON"
        | "ERROR_EVALUATION_REASON";
}
