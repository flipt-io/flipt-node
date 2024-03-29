/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const BooleanEvaluationResponse: core.serialization.ObjectSchema<
    serializers.evaluation.BooleanEvaluationResponse.Raw,
    FliptApi.evaluation.BooleanEvaluationResponse
> = core.serialization.object({
    requestId: core.serialization.string(),
    flagKey: core.serialization.string(),
    enabled: core.serialization.boolean(),
    timestamp: core.serialization.date(),
    requestDurationMillis: core.serialization.number(),
    reason: core.serialization.lazy(async () => (await import("../../..")).evaluation.EvaluationReason),
});

export declare namespace BooleanEvaluationResponse {
    interface Raw {
        requestId: string;
        flagKey: string;
        enabled: boolean;
        timestamp: string;
        requestDurationMillis: number;
        reason: serializers.evaluation.EvaluationReason.Raw;
    }
}
