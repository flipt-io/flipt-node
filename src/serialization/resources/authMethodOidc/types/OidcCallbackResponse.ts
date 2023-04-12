/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FliptApi } from "@flipt-io/flipt";
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