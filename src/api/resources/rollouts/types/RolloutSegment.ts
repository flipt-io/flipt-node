/**
 */

import * as FliptApi from "../../..";

export interface RolloutSegment {
    segmentKey: string;
    segmentKeys?: string[];
    segmentOperator?: FliptApi.RolloutSegmentOperator;
    value: boolean;
}
