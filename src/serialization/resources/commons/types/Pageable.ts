/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const Pageable: core.serialization.ObjectSchema<serializers.Pageable.Raw, FliptApi.Pageable> =
    core.serialization.object({
        nextPageToken: core.serialization.string().optional(),
        totalCount: core.serialization.number().optional(),
    });

export declare namespace Pageable {
    interface Raw {
        nextPageToken?: string | null;
        totalCount?: number | null;
    }
}
