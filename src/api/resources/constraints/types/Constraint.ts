/**
 */

import * as FliptApi from "../../..";

export interface Constraint {
    id: string;
    namespaceKey: string;
    segmentKey: string;
    type: FliptApi.ConstraintComparisonType;
    property: string;
    operator: string;
    value: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
