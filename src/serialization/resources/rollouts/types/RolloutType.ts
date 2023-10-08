/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const RolloutType: core.serialization.Schema<serializers.RolloutType.Raw, FliptApi.RolloutType> =
    core.serialization.enum_(["UNKNOWN_ROLLOUT_TYPE", "SEGMENT_ROLLOUT_TYPE", "THRESHOLD_ROLLOUT_TYPE"]);

export declare namespace RolloutType {
    type Raw = "UNKNOWN_ROLLOUT_TYPE" | "SEGMENT_ROLLOUT_TYPE" | "THRESHOLD_ROLLOUT_TYPE";
}
