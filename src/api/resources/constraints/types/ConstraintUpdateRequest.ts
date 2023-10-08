/**
 */

import * as FliptApi from "../../..";

export interface ConstraintUpdateRequest {
    type: FliptApi.ConstraintComparisonType;
    property: string;
    operator: string;
    value?: string;
    description?: string;
}
