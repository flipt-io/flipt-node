/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const FlagCreateRequest: core.serialization.ObjectSchema<
    serializers.FlagCreateRequest.Raw,
    FliptApi.FlagCreateRequest
> = core.serialization.object({
    key: core.serialization.string(),
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    enabled: core.serialization.boolean().optional(),
    type: core.serialization.lazy(async () => (await import("../../..")).FlagType),
});

export declare namespace FlagCreateRequest {
    interface Raw {
        key: string;
        name: string;
        description?: string | null;
        enabled?: boolean | null;
        type: serializers.FlagType.Raw;
    }
}
