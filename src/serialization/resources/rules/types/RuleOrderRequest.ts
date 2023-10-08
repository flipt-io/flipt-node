/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const RuleOrderRequest: core.serialization.ObjectSchema<
    serializers.RuleOrderRequest.Raw,
    FliptApi.RuleOrderRequest
> = core.serialization.object({
    ruleIds: core.serialization.list(core.serialization.string()),
});

export declare namespace RuleOrderRequest {
    interface Raw {
        ruleIds: string[];
    }
}
