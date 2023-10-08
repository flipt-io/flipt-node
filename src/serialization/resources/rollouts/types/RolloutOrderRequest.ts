/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const RolloutOrderRequest: core.serialization.ObjectSchema<
    serializers.RolloutOrderRequest.Raw,
    FliptApi.RolloutOrderRequest
> = core.serialization.object({
    rolloutIds: core.serialization.list(core.serialization.string()),
});

export declare namespace RolloutOrderRequest {
    interface Raw {
        rolloutIds: string[];
    }
}
