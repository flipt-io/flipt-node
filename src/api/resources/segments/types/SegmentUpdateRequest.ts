/**
 */

import * as FliptApi from "../../..";

export interface SegmentUpdateRequest {
    name: string;
    description: string;
    matchType: FliptApi.SegmentMatchType;
}
