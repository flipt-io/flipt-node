/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const BatchEvaluationRequest: core.serialization.ObjectSchema<
    serializers.BatchEvaluationRequest.Raw,
    FliptApi.BatchEvaluationRequest
> = core.serialization.object({
    requestId: core.serialization.string().optional(),
    requests: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).EvaluationRequest)
    ),
    excludeNotFound: core.serialization.boolean().optional(),
});

export declare namespace BatchEvaluationRequest {
    interface Raw {
        requestId?: string | null;
        requests: serializers.EvaluationRequest.Raw[];
        excludeNotFound?: boolean | null;
    }
}
