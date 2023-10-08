/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const AuthenticationMethod: core.serialization.Schema<
    serializers.AuthenticationMethod.Raw,
    FliptApi.AuthenticationMethod
> = core.serialization.enum_(["METHOD_NONE", "METHOD_TOKEN", "METHOD_OIDC", "METHOD_KUBERNETES"]);

export declare namespace AuthenticationMethod {
    type Raw = "METHOD_NONE" | "METHOD_TOKEN" | "METHOD_OIDC" | "METHOD_KUBERNETES";
}
