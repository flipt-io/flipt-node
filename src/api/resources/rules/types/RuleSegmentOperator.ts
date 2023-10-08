/**
 */

export type RuleSegmentOperator = "OR_SEGMENT_OPERATOR" | "AND_SEGMENT_OPERATOR";

export const RuleSegmentOperator = {
    OrSegmentOperator: "OR_SEGMENT_OPERATOR",
    AndSegmentOperator: "AND_SEGMENT_OPERATOR",
} as const;
