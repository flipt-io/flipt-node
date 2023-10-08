/**
 */

export interface EvaluationRequest {
    requestId?: string;
    namespaceKey: string;
    flagKey: string;
    entityId: string;
    context: Record<string, string>;
}
