/**
 */

import * as FliptApi from "../../..";

export interface BatchEvaluationRequest {
    requestId?: string;
    requests: FliptApi.evaluation.EvaluationRequest[];
}
