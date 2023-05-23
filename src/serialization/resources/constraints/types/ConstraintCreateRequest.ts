/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../../core";

export const ConstraintCreateRequest: core.serialization.ObjectSchema<
    serializers.ConstraintCreateRequest.Raw,
    FliptApi.ConstraintCreateRequest
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("../../..")).ConstraintComparisonType),
    property: core.serialization.string(),
    operator: core.serialization.string(),
    value: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
});

export declare namespace ConstraintCreateRequest {
    interface Raw {
        type: serializers.ConstraintComparisonType.Raw;
        property: string;
        operator: string;
        value?: string | null;
        description?: string | null;
    }
}
