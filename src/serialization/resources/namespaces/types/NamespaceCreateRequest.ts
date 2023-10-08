/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const NamespaceCreateRequest: core.serialization.ObjectSchema<
    serializers.NamespaceCreateRequest.Raw,
    FliptApi.NamespaceCreateRequest
> = core.serialization.object({
    key: core.serialization.string(),
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
});

export declare namespace NamespaceCreateRequest {
    interface Raw {
        key: string;
        name: string;
        description?: string | null;
    }
}
