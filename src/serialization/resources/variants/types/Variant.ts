/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../../core";

export const Variant: core.serialization.ObjectSchema<serializers.Variant.Raw, FliptApi.Variant> =
    core.serialization.object({
        id: core.serialization.string(),
        flagKey: core.serialization.string(),
        key: core.serialization.string(),
        name: core.serialization.string(),
        description: core.serialization.string(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
        attachment: core.serialization.string(),
    });

export declare namespace Variant {
    interface Raw {
        id: string;
        flagKey: string;
        key: string;
        name: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        attachment: string;
    }
}