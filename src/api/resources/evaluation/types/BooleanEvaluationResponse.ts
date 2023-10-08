/**
 */

import * as FliptApi from "../../..";

export interface BooleanEvaluationResponse {
    requestId: string;
    enabled: boolean;
    timestamp: Date;
    requestDurationMillis: number;
    reason: FliptApi.evaluation.EvaluationReason;
}
