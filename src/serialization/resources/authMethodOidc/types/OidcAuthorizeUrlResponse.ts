/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const OidcAuthorizeUrlResponse: core.serialization.ObjectSchema<
    serializers.OidcAuthorizeUrlResponse.Raw,
    FliptApi.OidcAuthorizeUrlResponse
> = core.serialization.object({
    authorizeUrl: core.serialization.string(),
});

export declare namespace OidcAuthorizeUrlResponse {
    interface Raw {
        authorizeUrl: string;
    }
}
