/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export const Response: core.schemas.Schema<serializers.flags.get.Response.Raw, FliptApi.Flag> = core.schemas.lazyObject(
  async () => (await import("../..")).Flag
);

export declare namespace Response {
  type Raw = serializers.Flag.Raw;
}
