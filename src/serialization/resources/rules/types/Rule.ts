/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const Rule: core.serialization.ObjectSchema<serializers.Rule.Raw, FliptApi.Rule> = core.serialization.object({
    id: core.serialization.string(),
    namespaceKey: core.serialization.string(),
    flagKey: core.serialization.string(),
    segmentKey: core.serialization.string(),
    segmentKeys: core.serialization.list(core.serialization.string()).optional(),
    segmentOperator: core.serialization.lazy(async () => (await import("../../..")).RuleSegmentOperator),
    distributions: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).Distribution)
    ),
    rank: core.serialization.number(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
});

export declare namespace Rule {
    interface Raw {
        id: string;
        namespaceKey: string;
        flagKey: string;
        segmentKey: string;
        segmentKeys?: string[] | null;
        segmentOperator: serializers.RuleSegmentOperator.Raw;
        distributions: serializers.Distribution.Raw[];
        rank: number;
        createdAt: string;
        updatedAt: string;
    }
}
