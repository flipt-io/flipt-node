/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const Flag: core.serialization.ObjectSchema<serializers.Flag.Raw, FliptApi.Flag> = core.serialization.object({
    namespaceKey: core.serialization.string(),
    key: core.serialization.string(),
    name: core.serialization.string(),
    description: core.serialization.string(),
    enabled: core.serialization.boolean(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
    variants: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Variant)),
    type: core.serialization.lazy(async () => (await import("../../..")).FlagType),
});

export declare namespace Flag {
    interface Raw {
        namespaceKey: string;
        key: string;
        name: string;
        description: string;
        enabled: boolean;
        createdAt: string;
        updatedAt: string;
        variants: serializers.Variant.Raw[];
        type: serializers.FlagType.Raw;
    }
}
