/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";

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
