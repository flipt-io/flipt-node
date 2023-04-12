/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FliptApi } from "@flipt-io/flipt";
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