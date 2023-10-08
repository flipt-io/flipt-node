/**
 */

import * as serializers from "../../../..";
import * as FliptApi from "../../../../../api";
import * as core from "../../../../../core";

export const AuthenticationExpireSelfRequest: core.serialization.Schema<
    serializers.AuthenticationExpireSelfRequest.Raw,
    FliptApi.AuthenticationExpireSelfRequest
> = core.serialization.object({
    expiresAt: core.serialization.date().optional(),
});

export declare namespace AuthenticationExpireSelfRequest {
    interface Raw {
        expiresAt?: string | null;
    }
}
