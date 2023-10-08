/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const EvaluationRequest: core.serialization.ObjectSchema<
    serializers.evaluation.EvaluationRequest.Raw,
    FliptApi.evaluation.EvaluationRequest
> = core.serialization.object({
    requestId: core.serialization.string().optional(),
    namespaceKey: core.serialization.string(),
    flagKey: core.serialization.string(),
    entityId: core.serialization.string(),
    context: core.serialization.record(core.serialization.string(), core.serialization.string()),
});

export declare namespace EvaluationRequest {
    interface Raw {
        requestId?: string | null;
        namespaceKey: string;
        flagKey: string;
        entityId: string;
        context: Record<string, string>;
    }
}
