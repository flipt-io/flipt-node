/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const Distribution: core.serialization.ObjectSchema<serializers.Distribution.Raw, FliptApi.Distribution> =
    core.serialization.object({
        id: core.serialization.string(),
        ruleId: core.serialization.string(),
        variantId: core.serialization.string(),
        rollout: core.serialization.number(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
    });

export declare namespace Distribution {
    interface Raw {
        id: string;
        ruleId: string;
        variantId: string;
        rollout: number;
        createdAt: string;
        updatedAt: string;
    }
}
