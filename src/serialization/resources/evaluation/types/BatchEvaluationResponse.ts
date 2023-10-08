/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const BatchEvaluationResponse: core.serialization.ObjectSchema<
    serializers.evaluation.BatchEvaluationResponse.Raw,
    FliptApi.evaluation.BatchEvaluationResponse
> = core.serialization.object({
    requestId: core.serialization.string(),
    responses: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).evaluation.EvaluationResponse)
    ),
    requestDurationMillis: core.serialization.number(),
});

export declare namespace BatchEvaluationResponse {
    interface Raw {
        requestId: string;
        responses: serializers.evaluation.EvaluationResponse.Raw[];
        requestDurationMillis: number;
    }
}
