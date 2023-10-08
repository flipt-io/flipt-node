/**
 */

import * as FliptApi from "../../..";

export interface RuleUpdateRequest {
    segmentKey: string;
    segmentKeys?: string[];
    segmentOperator?: FliptApi.RuleSegmentOperator;
}
