/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const DistributionUpdateRequest: core.serialization.ObjectSchema<
    serializers.DistributionUpdateRequest.Raw,
    FliptApi.DistributionUpdateRequest
> = core.serialization.object({
    variantId: core.serialization.string(),
    rollout: core.serialization.number(),
});

export declare namespace DistributionUpdateRequest {
    interface Raw {
        variantId: string;
        rollout: number;
    }
}
