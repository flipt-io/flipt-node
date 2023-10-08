/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const RuleList: core.serialization.ObjectSchema<serializers.RuleList.Raw, FliptApi.RuleList> =
    core.serialization.object({
        rules: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Rule)),
        nextPageToken: core.serialization.string(),
        totalCount: core.serialization.number(),
    });

export declare namespace RuleList {
    interface Raw {
        rules: serializers.Rule.Raw[];
        nextPageToken: string;
        totalCount: number;
    }
}
