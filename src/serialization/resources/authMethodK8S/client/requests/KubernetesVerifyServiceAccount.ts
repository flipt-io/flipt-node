/**
 */

import * as serializers from "../../../..";
import * as FliptApi from "../../../../../api";
import * as core from "../../../../../core";

export const KubernetesVerifyServiceAccount: core.serialization.Schema<
    serializers.KubernetesVerifyServiceAccount.Raw,
    FliptApi.KubernetesVerifyServiceAccount
> = core.serialization.object({
    serviceAccountToken: core.serialization.string(),
});

export declare namespace KubernetesVerifyServiceAccount {
    interface Raw {
        serviceAccountToken: string;
    }
}
