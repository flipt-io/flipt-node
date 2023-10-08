/**
 */

import * as FliptApi from "../../..";

export interface EvaluationResponse {
    requestId: string;
    entityId: string;
    requestContext: Record<string, string>;
    match: boolean;
    flagKey: string;
    segmentKey: string;
    timestamp: Date;
    value: string;
    requestDurationMillis: number;
    attachment: string;
    reason: FliptApi.EvaluationReason;
    segmentKeys?: string;
}
