/**
 */

import * as FliptApi from "../../..";

export interface BatchEvaluationResponse {
    requestId: string;
    responses: FliptApi.evaluation.EvaluationResponse[];
    requestDurationMillis: number;
}
