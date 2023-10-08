/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const EvaluationResponse: core.serialization.ObjectSchema<
    serializers.evaluation.EvaluationResponse.Raw,
    FliptApi.evaluation.EvaluationResponse
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("../../..")).evaluation.EvaluationResponseType),
    booleanResponse: core.serialization
        .lazyObject(async () => (await import("../../..")).evaluation.BooleanEvaluationResponse)
        .optional(),
    variantResponse: core.serialization
        .lazyObject(async () => (await import("../../..")).evaluation.VariantEvaluationResponse)
        .optional(),
    errorResponse: core.serialization
        .lazyObject(async () => (await import("../../..")).evaluation.ErrorEvaluationResponse)
        .optional(),
});

export declare namespace EvaluationResponse {
    interface Raw {
        type: serializers.evaluation.EvaluationResponseType.Raw;
        booleanResponse?: serializers.evaluation.BooleanEvaluationResponse.Raw | null;
        variantResponse?: serializers.evaluation.VariantEvaluationResponse.Raw | null;
        errorResponse?: serializers.evaluation.ErrorEvaluationResponse.Raw | null;
    }
}
