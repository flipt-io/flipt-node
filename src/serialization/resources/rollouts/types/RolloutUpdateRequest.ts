/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const RolloutUpdateRequest: core.serialization.ObjectSchema<
    serializers.RolloutUpdateRequest.Raw,
    FliptApi.RolloutUpdateRequest
> = core.serialization.object({
    description: core.serialization.string().optional(),
    segment: core.serialization.lazyObject(async () => (await import("../../..")).RolloutSegment).optional(),
    threshold: core.serialization.lazyObject(async () => (await import("../../..")).RolloutThreshold).optional(),
});

export declare namespace RolloutUpdateRequest {
    interface Raw {
        description?: string | null;
        segment?: serializers.RolloutSegment.Raw | null;
        threshold?: serializers.RolloutThreshold.Raw | null;
    }
}
