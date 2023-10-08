/**
 */

import * as FliptApi from "../../..";

export interface BatchEvaluationResponse {
    requestId: string;
    responses: FliptApi.EvaluationResponse[];
    requestDurationMillis: number;
}
