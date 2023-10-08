/**
 */

import * as FliptApi from "../../..";

export interface RolloutUpdateRequest {
    description?: string;
    segment?: FliptApi.RolloutSegment;
    threshold?: FliptApi.RolloutThreshold;
}
