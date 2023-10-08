/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const ConstraintComparisonType: core.serialization.Schema<
    serializers.ConstraintComparisonType.Raw,
    FliptApi.ConstraintComparisonType
> = core.serialization.enum_([
    "UNKNOWN_COMPARISON_TYPE",
    "STRING_COMPARISON_TYPE",
    "NUMBER_COMPARISON_TYPE",
    "BOOLEAN_COMPARISON_TYPE",
    "DATETIME_COMPARISON_TYPE",
]);

export declare namespace ConstraintComparisonType {
    type Raw =
        | "UNKNOWN_COMPARISON_TYPE"
        | "STRING_COMPARISON_TYPE"
        | "NUMBER_COMPARISON_TYPE"
        | "BOOLEAN_COMPARISON_TYPE"
        | "DATETIME_COMPARISON_TYPE";
}
