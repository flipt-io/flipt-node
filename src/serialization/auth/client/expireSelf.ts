/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export const Request: core.schemas.Schema<
  serializers.auth.expireSelf.Request.Raw,
  FliptApi.AuthenticationExpireSelfRequest
> = core.schemas.object({
  expiresAt: core.schemas.date().optional(),
});

export declare namespace Request {
  interface Raw {
    expiresAt?: string | null;
  }
}
