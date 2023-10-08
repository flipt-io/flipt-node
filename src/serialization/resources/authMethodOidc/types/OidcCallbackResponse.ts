/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const OidcCallbackResponse: core.serialization.ObjectSchema<
    serializers.OidcCallbackResponse.Raw,
    FliptApi.OidcCallbackResponse
> = core.serialization.object({
    authentication: core.serialization.lazyObject(async () => (await import("../../..")).Authentication),
});

export declare namespace OidcCallbackResponse {
    interface Raw {
        authentication: serializers.Authentication.Raw;
    }
}
