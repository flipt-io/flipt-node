/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const RolloutCreateRequest: core.serialization.ObjectSchema<
    serializers.RolloutCreateRequest.Raw,
    FliptApi.RolloutCreateRequest
> = core.serialization.object({
    rank: core.serialization.number(),
    description: core.serialization.string().optional(),
    segment: core.serialization.lazyObject(async () => (await import("../../..")).RolloutSegment).optional(),
    threshold: core.serialization.lazyObject(async () => (await import("../../..")).RolloutThreshold).optional(),
});

export declare namespace RolloutCreateRequest {
    interface Raw {
        rank: number;
        description?: string | null;
        segment?: serializers.RolloutSegment.Raw | null;
        threshold?: serializers.RolloutThreshold.Raw | null;
    }
}
