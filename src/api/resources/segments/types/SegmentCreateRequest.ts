/**
 */

import * as FliptApi from "../../..";

export interface SegmentCreateRequest {
    key: string;
    name: string;
    description: string;
    matchType: FliptApi.SegmentMatchType;
}
