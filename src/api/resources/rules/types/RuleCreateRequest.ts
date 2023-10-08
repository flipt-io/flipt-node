/**
 */

import * as FliptApi from "../../..";

export interface RuleCreateRequest {
    segmentKey: string;
    segmentKeys?: string[];
    segmentOperator?: FliptApi.RuleSegmentOperator;
    rank: number;
}
