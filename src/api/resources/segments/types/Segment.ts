/**
 */

import * as FliptApi from "../../..";

export interface Segment {
    namespaceKey: string;
    key: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    constraints: FliptApi.Constraint[];
    matchType: FliptApi.SegmentMatchType;
}
