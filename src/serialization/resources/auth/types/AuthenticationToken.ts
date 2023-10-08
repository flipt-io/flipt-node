/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const AuthenticationToken: core.serialization.ObjectSchema<
    serializers.AuthenticationToken.Raw,
    FliptApi.AuthenticationToken
> = core.serialization.object({
    clientToken: core.serialization.string(),
    authentication: core.serialization.lazyObject(async () => (await import("../../..")).Authentication),
});

export declare namespace AuthenticationToken {
    interface Raw {
        clientToken: string;
        authentication: serializers.Authentication.Raw;
    }
}
