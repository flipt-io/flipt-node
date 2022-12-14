/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export const SegmentMatchType: core.schemas.Schema<serializers.SegmentMatchType.Raw, FliptApi.SegmentMatchType> =
  core.schemas.enum_(["ALL_MATCH_TYPE", "ANY_MATCH_TYPE"]);

export declare namespace SegmentMatchType {
  type Raw = "ALL_MATCH_TYPE" | "ANY_MATCH_TYPE";
}
