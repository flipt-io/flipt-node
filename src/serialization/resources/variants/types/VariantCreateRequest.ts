/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const VariantCreateRequest: core.serialization.ObjectSchema<
    serializers.VariantCreateRequest.Raw,
    FliptApi.VariantCreateRequest
> = core.serialization.object({
    key: core.serialization.string(),
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    attachment: core.serialization.string().optional(),
});

export declare namespace VariantCreateRequest {
    interface Raw {
        key: string;
        name?: string | null;
        description?: string | null;
        attachment?: string | null;
    }
}
