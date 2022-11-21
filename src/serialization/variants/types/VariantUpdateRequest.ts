/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export const VariantUpdateRequest: core.schemas.ObjectSchema<VariantUpdateRequest.Raw, FliptApi.VariantUpdateRequest> =
  core.schemas.object({
    key: core.schemas.string(),
    name: core.schemas.string().optional(),
    description: core.schemas.string().optional(),
    attachment: core.schemas.string().optional(),
  });

export declare namespace VariantUpdateRequest {
  interface Raw {
    key: string;
    name?: string | null;
    description?: string | null;
    attachment?: string | null;
  }
}