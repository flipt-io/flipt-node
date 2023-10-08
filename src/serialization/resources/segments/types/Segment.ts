/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const Segment: core.serialization.ObjectSchema<serializers.Segment.Raw, FliptApi.Segment> =
    core.serialization.object({
        namespaceKey: core.serialization.string(),
        key: core.serialization.string(),
        name: core.serialization.string(),
        description: core.serialization.string(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
        constraints: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).Constraint)
        ),
        matchType: core.serialization.lazy(async () => (await import("../../..")).SegmentMatchType),
    });

export declare namespace Segment {
    interface Raw {
        namespaceKey: string;
        key: string;
        name: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        constraints: serializers.Constraint.Raw[];
        matchType: serializers.SegmentMatchType.Raw;
    }
}
