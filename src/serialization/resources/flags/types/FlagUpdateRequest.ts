/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const FlagUpdateRequest: core.serialization.ObjectSchema<
    serializers.FlagUpdateRequest.Raw,
    FliptApi.FlagUpdateRequest
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    enabled: core.serialization.boolean().optional(),
});

export declare namespace FlagUpdateRequest {
    interface Raw {
        name: string;
        description?: string | null;
        enabled?: boolean | null;
    }
}
