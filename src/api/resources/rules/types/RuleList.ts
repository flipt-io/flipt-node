/**
 */

import * as FliptApi from "../../..";

export interface RuleList {
    rules: FliptApi.Rule[];
    nextPageToken: string;
    totalCount: number;
}
