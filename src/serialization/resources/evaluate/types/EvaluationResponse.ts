/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const EvaluationResponse: core.serialization.ObjectSchema<
    serializers.EvaluationResponse.Raw,
    FliptApi.EvaluationResponse
> = core.serialization.object({
    requestId: core.serialization.string(),
    entityId: core.serialization.string(),
    requestContext: core.serialization.record(core.serialization.string(), core.serialization.string()),
    match: core.serialization.boolean(),
    flagKey: core.serialization.string(),
    segmentKey: core.serialization.string(),
    timestamp: core.serialization.date(),
    value: core.serialization.string(),
    requestDurationMillis: core.serialization.number(),
    attachment: core.serialization.string(),
    reason: core.serialization.lazy(async () => (await import("../../..")).EvaluationReason),
    segmentKeys: core.serialization.string().optional(),
});

export declare namespace EvaluationResponse {
    interface Raw {
        requestId: string;
        entityId: string;
        requestContext: Record<string, string>;
        match: boolean;
        flagKey: string;
        segmentKey: string;
        timestamp: string;
        value: string;
        requestDurationMillis: number;
        attachment: string;
        reason: serializers.EvaluationReason.Raw;
        segmentKeys?: string | null;
    }
}
