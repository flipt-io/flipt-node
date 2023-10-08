/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const Authentication: core.serialization.ObjectSchema<serializers.Authentication.Raw, FliptApi.Authentication> =
    core.serialization.object({
        id: core.serialization.string(),
        method: core.serialization.lazy(async () => (await import("../../..")).AuthenticationMethod),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
        expiresAt: core.serialization.date().optional(),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.string()),
    });

export declare namespace Authentication {
    interface Raw {
        id: string;
        method: serializers.AuthenticationMethod.Raw;
        createdAt: string;
        updatedAt: string;
        expiresAt?: string | null;
        metadata: Record<string, string>;
    }
}
