/**
 */

import * as FliptApi from "../../..";

export interface FlagList {
    flags: FliptApi.Flag[];
    nextPageToken: string;
    totalCount: number;
}
