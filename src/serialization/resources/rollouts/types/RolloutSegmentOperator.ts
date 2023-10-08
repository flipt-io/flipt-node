/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const RolloutSegmentOperator: core.serialization.Schema<
    serializers.RolloutSegmentOperator.Raw,
    FliptApi.RolloutSegmentOperator
> = core.serialization.enum_(["OR_SEGMENT_OPERATOR", "AND_SEGMENT_OPERATOR"]);

export declare namespace RolloutSegmentOperator {
    type Raw = "OR_SEGMENT_OPERATOR" | "AND_SEGMENT_OPERATOR";
}
