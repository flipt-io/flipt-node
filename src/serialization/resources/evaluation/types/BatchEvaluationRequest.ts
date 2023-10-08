/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const BatchEvaluationRequest: core.serialization.ObjectSchema<
    serializers.evaluation.BatchEvaluationRequest.Raw,
    FliptApi.evaluation.BatchEvaluationRequest
> = core.serialization.object({
    requestId: core.serialization.string().optional(),
    requests: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).evaluation.EvaluationRequest)
    ),
});

export declare namespace BatchEvaluationRequest {
    interface Raw {
        requestId?: string | null;
        requests: serializers.evaluation.EvaluationRequest.Raw[];
    }
}
