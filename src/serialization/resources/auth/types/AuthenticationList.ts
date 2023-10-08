/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const AuthenticationList: core.serialization.ObjectSchema<
    serializers.AuthenticationList.Raw,
    FliptApi.AuthenticationList
> = core.serialization.object({
    authentications: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).Authentication)
    ),
    nextPageToken: core.serialization.string(),
});

export declare namespace AuthenticationList {
    interface Raw {
        authentications: serializers.Authentication.Raw[];
        nextPageToken: string;
    }
}
