/**
 */

import * as FliptApi from "../../..";

export interface RolloutList {
    rollouts: FliptApi.Rollout[];
    nextPageToken: string;
    totalCount: number;
}
