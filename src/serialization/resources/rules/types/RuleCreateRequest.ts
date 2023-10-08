/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const RuleCreateRequest: core.serialization.ObjectSchema<
    serializers.RuleCreateRequest.Raw,
    FliptApi.RuleCreateRequest
> = core.serialization.object({
    segmentKey: core.serialization.string(),
    segmentKeys: core.serialization.list(core.serialization.string()).optional(),
    segmentOperator: core.serialization.lazy(async () => (await import("../../..")).RuleSegmentOperator).optional(),
    rank: core.serialization.number(),
});

export declare namespace RuleCreateRequest {
    interface Raw {
        segmentKey: string;
        segmentKeys?: string[] | null;
        segmentOperator?: serializers.RuleSegmentOperator.Raw | null;
        rank: number;
    }
}
