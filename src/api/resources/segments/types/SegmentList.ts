/**
 */

import * as FliptApi from "../../..";

export interface SegmentList {
    segments: FliptApi.Segment[];
    nextPageToken: string;
    totalCount: number;
}
