/**
 */

import * as FliptApi from "../../..";

export interface Rule {
    id: string;
    namespaceKey: string;
    flagKey: string;
    segmentKey: string;
    segmentKeys?: string[];
    segmentOperator: FliptApi.RuleSegmentOperator;
    distributions: FliptApi.Distribution[];
    rank: number;
    createdAt: Date;
    updatedAt: Date;
}
