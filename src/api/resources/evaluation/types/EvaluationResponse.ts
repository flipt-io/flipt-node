/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FliptApi from "../../..";

export interface EvaluationResponse {
    type: FliptApi.evaluation.EvaluationResponseType;
    booleanResponse?: FliptApi.evaluation.BooleanEvaluationResponse;
    variantResponse?: FliptApi.evaluation.VariantEvaluationResponse;
    errorResponse?: FliptApi.evaluation.ErrorEvaluationResponse;
}
