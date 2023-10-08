/**
 */

export type RolloutSegmentOperator = "OR_SEGMENT_OPERATOR" | "AND_SEGMENT_OPERATOR";

export const RolloutSegmentOperator = {
    OrSegmentOperator: "OR_SEGMENT_OPERATOR",
    AndSegmentOperator: "AND_SEGMENT_OPERATOR",
} as const;
