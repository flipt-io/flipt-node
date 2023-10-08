/**
 */

import * as FliptApi from "../../..";

export interface ErrorEvaluationResponse {
    flagKey: string;
    namespaceKey: string;
    reason: FliptApi.evaluation.ErrorEvaluationReason;
}
