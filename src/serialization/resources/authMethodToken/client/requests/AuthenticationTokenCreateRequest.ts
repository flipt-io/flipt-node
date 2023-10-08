/**
 */

import * as serializers from "../../../..";
import * as FliptApi from "../../../../../api";
import * as core from "../../../../../core";

export const AuthenticationTokenCreateRequest: core.serialization.Schema<
    serializers.AuthenticationTokenCreateRequest.Raw,
    FliptApi.AuthenticationTokenCreateRequest
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string(),
    expiresAt: core.serialization.date().optional(),
});

export declare namespace AuthenticationTokenCreateRequest {
    interface Raw {
        name: string;
        description: string;
        expiresAt?: string | null;
    }
}
