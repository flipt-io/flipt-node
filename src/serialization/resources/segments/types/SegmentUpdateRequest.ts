/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const SegmentUpdateRequest: core.serialization.ObjectSchema<
    serializers.SegmentUpdateRequest.Raw,
    FliptApi.SegmentUpdateRequest
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string(),
    matchType: core.serialization.lazy(async () => (await import("../../..")).SegmentMatchType),
});

export declare namespace SegmentUpdateRequest {
    interface Raw {
        name: string;
        description: string;
        matchType: serializers.SegmentMatchType.Raw;
    }
}
