/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const Variant: core.serialization.ObjectSchema<serializers.Variant.Raw, FliptApi.Variant> =
    core.serialization.object({
        id: core.serialization.string(),
        namespaceKey: core.serialization.string(),
        flagKey: core.serialization.string(),
        key: core.serialization.string(),
        name: core.serialization.string(),
        description: core.serialization.string(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
        attachment: core.serialization.string(),
    });

export declare namespace Variant {
    interface Raw {
        id: string;
        namespaceKey: string;
        flagKey: string;
        key: string;
        name: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        attachment: string;
    }
}
