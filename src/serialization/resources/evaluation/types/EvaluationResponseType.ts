/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const EvaluationResponseType: core.serialization.Schema<
    serializers.evaluation.EvaluationResponseType.Raw,
    FliptApi.evaluation.EvaluationResponseType
> = core.serialization.enum_([
    "VARIANT_EVALUATION_RESPONSE_TYPE",
    "BOOLEAN_EVALUATION_RESPONSE_TYPE",
    "ERROR_EVALUATION_RESPONSE_TYPE",
]);

export declare namespace EvaluationResponseType {
    type Raw =
        | "VARIANT_EVALUATION_RESPONSE_TYPE"
        | "BOOLEAN_EVALUATION_RESPONSE_TYPE"
        | "ERROR_EVALUATION_RESPONSE_TYPE";
}
