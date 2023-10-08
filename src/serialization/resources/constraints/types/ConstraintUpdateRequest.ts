/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const ConstraintUpdateRequest: core.serialization.ObjectSchema<
    serializers.ConstraintUpdateRequest.Raw,
    FliptApi.ConstraintUpdateRequest
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("../../..")).ConstraintComparisonType),
    property: core.serialization.string(),
    operator: core.serialization.string(),
    value: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
});

export declare namespace ConstraintUpdateRequest {
    interface Raw {
        type: serializers.ConstraintComparisonType.Raw;
        property: string;
        operator: string;
        value?: string | null;
        description?: string | null;
    }
}
