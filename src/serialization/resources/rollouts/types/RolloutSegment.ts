/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const RolloutSegment: core.serialization.ObjectSchema<serializers.RolloutSegment.Raw, FliptApi.RolloutSegment> =
    core.serialization.object({
        segmentKey: core.serialization.string(),
        segmentKeys: core.serialization.list(core.serialization.string()).optional(),
        segmentOperator: core.serialization
            .lazy(async () => (await import("../../..")).RolloutSegmentOperator)
            .optional(),
        value: core.serialization.boolean(),
    });

export declare namespace RolloutSegment {
    interface Raw {
        segmentKey: string;
        segmentKeys?: string[] | null;
        segmentOperator?: serializers.RolloutSegmentOperator.Raw | null;
        value: boolean;
    }
}
