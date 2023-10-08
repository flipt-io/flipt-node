/**
 */

import * as FliptApi from "../../..";

export interface RolloutCreateRequest {
    rank: number;
    description?: string;
    segment?: FliptApi.RolloutSegment;
    threshold?: FliptApi.RolloutThreshold;
}
