/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const Rollout: core.serialization.ObjectSchema<serializers.Rollout.Raw, FliptApi.Rollout> =
    core.serialization.object({
        id: core.serialization.string(),
        namespaceKey: core.serialization.string(),
        flagKey: core.serialization.string(),
        type: core.serialization.lazy(async () => (await import("../../..")).RolloutType),
        rank: core.serialization.number(),
        description: core.serialization.string(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
        segment: core.serialization.lazyObject(async () => (await import("../../..")).RolloutSegment).optional(),
        threshold: core.serialization.lazyObject(async () => (await import("../../..")).RolloutThreshold).optional(),
    });

export declare namespace Rollout {
    interface Raw {
        id: string;
        namespaceKey: string;
        flagKey: string;
        type: serializers.RolloutType.Raw;
        rank: number;
        description: string;
        createdAt: string;
        updatedAt: string;
        segment?: serializers.RolloutSegment.Raw | null;
        threshold?: serializers.RolloutThreshold.Raw | null;
    }
}
