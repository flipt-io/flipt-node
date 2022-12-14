/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export const RuleList: core.schemas.ObjectSchema<serializers.RuleList.Raw, FliptApi.RuleList> = core.schemas.object({
  rules: core.schemas.list(core.schemas.lazyObject(async () => (await import("../..")).Rule)),
  nextPageToken: core.schemas.string(),
  totalCount: core.schemas.number(),
});

export declare namespace RuleList {
  interface Raw {
    rules: serializers.Rule.Raw[];
    nextPageToken: string;
    totalCount: number;
  }
}
