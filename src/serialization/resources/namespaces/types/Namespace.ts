/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const Namespace: core.serialization.ObjectSchema<serializers.Namespace.Raw, FliptApi.Namespace> =
    core.serialization.object({
        key: core.serialization.string(),
        name: core.serialization.string(),
        description: core.serialization.string(),
        protected: core.serialization.boolean(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
    });

export declare namespace Namespace {
    interface Raw {
        key: string;
        name: string;
        description: string;
        protected: boolean;
        createdAt: string;
        updatedAt: string;
    }
}
