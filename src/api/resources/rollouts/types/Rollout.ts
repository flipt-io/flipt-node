/**
 */

import * as FliptApi from "../../..";

export interface Rollout {
    id: string;
    namespaceKey: string;
    flagKey: string;
    type: FliptApi.RolloutType;
    rank: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    segment?: FliptApi.RolloutSegment;
    threshold?: FliptApi.RolloutThreshold;
}
