/**
 */

export interface EvaluationRequest {
    requestId?: string;
    flagKey: string;
    entityId: string;
    context: Record<string, string>;
}
