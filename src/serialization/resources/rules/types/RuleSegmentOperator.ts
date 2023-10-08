/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const RuleSegmentOperator: core.serialization.Schema<
    serializers.RuleSegmentOperator.Raw,
    FliptApi.RuleSegmentOperator
> = core.serialization.enum_(["OR_SEGMENT_OPERATOR", "AND_SEGMENT_OPERATOR"]);

export declare namespace RuleSegmentOperator {
    type Raw = "OR_SEGMENT_OPERATOR" | "AND_SEGMENT_OPERATOR";
}
