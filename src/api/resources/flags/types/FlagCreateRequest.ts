/**
 */

import * as FliptApi from "../../..";

export interface FlagCreateRequest {
    key: string;
    name: string;
    description?: string;
    enabled?: boolean;
    type: FliptApi.FlagType;
}
