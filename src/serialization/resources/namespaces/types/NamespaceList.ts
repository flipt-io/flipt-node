/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const NamespaceList: core.serialization.ObjectSchema<serializers.NamespaceList.Raw, FliptApi.NamespaceList> =
    core.serialization.object({
        namespaces: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).Namespace)
        ),
        nextPageToken: core.serialization.string(),
        totalCount: core.serialization.number(),
    });

export declare namespace NamespaceList {
    interface Raw {
        namespaces: serializers.Namespace.Raw[];
        nextPageToken: string;
        totalCount: number;
    }
}
