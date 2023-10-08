/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const Constraint: core.serialization.ObjectSchema<serializers.Constraint.Raw, FliptApi.Constraint> =
    core.serialization.object({
        id: core.serialization.string(),
        namespaceKey: core.serialization.string(),
        segmentKey: core.serialization.string(),
        type: core.serialization.lazy(async () => (await import("../../..")).ConstraintComparisonType),
        property: core.serialization.string(),
        operator: core.serialization.string(),
        value: core.serialization.string(),
        description: core.serialization.string(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
    });

export declare namespace Constraint {
    interface Raw {
        id: string;
        namespaceKey: string;
        segmentKey: string;
        type: serializers.ConstraintComparisonType.Raw;
        property: string;
        operator: string;
        value: string;
        description: string;
        createdAt: string;
        updatedAt: string;
    }
}
