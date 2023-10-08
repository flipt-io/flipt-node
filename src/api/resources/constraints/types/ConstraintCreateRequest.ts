/**
 */

import * as FliptApi from "../../..";

export interface ConstraintCreateRequest {
    type: FliptApi.ConstraintComparisonType;
    property: string;
    operator: string;
    value?: string;
    description?: string;
}
