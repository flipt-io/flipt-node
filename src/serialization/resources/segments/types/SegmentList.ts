/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const SegmentList: core.serialization.ObjectSchema<serializers.SegmentList.Raw, FliptApi.SegmentList> =
    core.serialization.object({
        segments: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).Segment)
        ),
        nextPageToken: core.serialization.string(),
        totalCount: core.serialization.number(),
    });

export declare namespace SegmentList {
    interface Raw {
        segments: serializers.Segment.Raw[];
        nextPageToken: string;
        totalCount: number;
    }
}
