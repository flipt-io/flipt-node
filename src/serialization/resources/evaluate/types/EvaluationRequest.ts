/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const EvaluationRequest: core.serialization.ObjectSchema<
    serializers.EvaluationRequest.Raw,
    FliptApi.EvaluationRequest
> = core.serialization.object({
    requestId: core.serialization.string().optional(),
    flagKey: core.serialization.string(),
    entityId: core.serialization.string(),
    context: core.serialization.record(core.serialization.string(), core.serialization.string()),
});

export declare namespace EvaluationRequest {
    interface Raw {
        requestId?: string | null;
        flagKey: string;
        entityId: string;
        context: Record<string, string>;
    }
}
