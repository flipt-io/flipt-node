/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const FlagType: core.serialization.Schema<serializers.FlagType.Raw, FliptApi.FlagType> =
    core.serialization.enum_(["VARIANT_FLAG_TYPE", "BOOLEAN_FLAG_TYPE"]);

export declare namespace FlagType {
    type Raw = "VARIANT_FLAG_TYPE" | "BOOLEAN_FLAG_TYPE";
}
