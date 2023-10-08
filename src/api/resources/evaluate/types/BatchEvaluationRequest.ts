/**
 */

import * as FliptApi from "../../..";

export interface BatchEvaluationRequest {
    requestId?: string;
    requests: FliptApi.EvaluationRequest[];
    excludeNotFound?: boolean;
}
