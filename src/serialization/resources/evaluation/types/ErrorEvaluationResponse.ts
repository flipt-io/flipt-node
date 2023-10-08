/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const ErrorEvaluationResponse: core.serialization.ObjectSchema<
    serializers.evaluation.ErrorEvaluationResponse.Raw,
    FliptApi.evaluation.ErrorEvaluationResponse
> = core.serialization.object({
    flagKey: core.serialization.string(),
    namespaceKey: core.serialization.string(),
    reason: core.serialization.lazy(async () => (await import("../../..")).evaluation.ErrorEvaluationReason),
});

export declare namespace ErrorEvaluationResponse {
    interface Raw {
        flagKey: string;
        namespaceKey: string;
        reason: serializers.evaluation.ErrorEvaluationReason.Raw;
    }
}
