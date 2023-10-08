/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const SegmentMatchType: core.serialization.Schema<serializers.SegmentMatchType.Raw, FliptApi.SegmentMatchType> =
    core.serialization.enum_(["ALL_MATCH_TYPE", "ANY_MATCH_TYPE"]);

export declare namespace SegmentMatchType {
    type Raw = "ALL_MATCH_TYPE" | "ANY_MATCH_TYPE";
}
