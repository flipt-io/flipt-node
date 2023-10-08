/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const DistributionCreateRequest: core.serialization.ObjectSchema<
    serializers.DistributionCreateRequest.Raw,
    FliptApi.DistributionCreateRequest
> = core.serialization.object({
    variantId: core.serialization.string(),
    rollout: core.serialization.number(),
});

export declare namespace DistributionCreateRequest {
    interface Raw {
        variantId: string;
        rollout: number;
    }
}
