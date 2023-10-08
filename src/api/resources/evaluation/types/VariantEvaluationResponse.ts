/**
 */

import * as FliptApi from "../../..";

export interface VariantEvaluationResponse {
    requestId: string;
    match: boolean;
    segmentKeys: string[];
    variantKey: string;
    variantAttachment: string;
    timestamp: Date;
    requestDurationMillis: number;
    reason: FliptApi.evaluation.EvaluationReason;
}
