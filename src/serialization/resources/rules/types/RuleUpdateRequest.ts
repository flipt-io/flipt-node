/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const RuleUpdateRequest: core.serialization.ObjectSchema<
    serializers.RuleUpdateRequest.Raw,
    FliptApi.RuleUpdateRequest
> = core.serialization.object({
    segmentKey: core.serialization.string(),
    segmentKeys: core.serialization.list(core.serialization.string()).optional(),
    segmentOperator: core.serialization.lazy(async () => (await import("../../..")).RuleSegmentOperator).optional(),
});

export declare namespace RuleUpdateRequest {
    interface Raw {
        segmentKey: string;
        segmentKeys?: string[] | null;
        segmentOperator?: serializers.RuleSegmentOperator.Raw | null;
    }
}
