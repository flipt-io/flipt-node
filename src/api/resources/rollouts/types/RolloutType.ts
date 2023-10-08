/**
 */

export type RolloutType = "UNKNOWN_ROLLOUT_TYPE" | "SEGMENT_ROLLOUT_TYPE" | "THRESHOLD_ROLLOUT_TYPE";

export const RolloutType = {
    UnknownRolloutType: "UNKNOWN_ROLLOUT_TYPE",
    SegmentRolloutType: "SEGMENT_ROLLOUT_TYPE",
    ThresholdRolloutType: "THRESHOLD_ROLLOUT_TYPE",
} as const;
