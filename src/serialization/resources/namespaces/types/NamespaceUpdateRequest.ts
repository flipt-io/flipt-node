/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const NamespaceUpdateRequest: core.serialization.ObjectSchema<
    serializers.NamespaceUpdateRequest.Raw,
    FliptApi.NamespaceUpdateRequest
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
});

export declare namespace NamespaceUpdateRequest {
    interface Raw {
        name: string;
        description?: string | null;
    }
}
