/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const RolloutThreshold: core.serialization.ObjectSchema<
    serializers.RolloutThreshold.Raw,
    FliptApi.RolloutThreshold
> = core.serialization.object({
    percentage: core.serialization.number(),
    value: core.serialization.boolean(),
});

export declare namespace RolloutThreshold {
    interface Raw {
        percentage: number;
        value: boolean;
    }
}
