import { FliptApi } from "@flipt-io/flipt";
import { datadogRum } from "@datadog/browser-rum";

export interface DatadogRUMOptions {
    applicationId: string;
    clientToken: string;
    site: string;
    service?: string;
    env?: string;
    version?: string;
    sessionSampleRate?: number;
    sessionReplaySampleRate?: number;
    trackResources?: boolean;
    trackLongTasks?: boolean;
    trackUserInteractions?: boolean;
}

export function initializeDatadogRUM(datadogRUMOptions: DatadogRUMOptions) {
    if (datadogRUMOptions.applicationId === undefined || datadogRUMOptions.applicationId === null) {
        throw new Error("must define application id");
    }
    if (datadogRUMOptions.clientToken === undefined || datadogRUMOptions.clientToken === null) {
        throw new Error("must define client token");
    }
    if (datadogRUMOptions.site === undefined || datadogRUMOptions.site === null) {
        throw new Error("must define site");
    }

    datadogRUMOptions.sessionSampleRate = datadogRUMOptions.sessionSampleRate || 100;
    datadogRUMOptions.sessionReplaySampleRate = datadogRUMOptions.sessionReplaySampleRate || 100;
    datadogRUMOptions.trackResources = datadogRUMOptions.trackResources || true;
    datadogRUMOptions.trackLongTasks = datadogRUMOptions.trackLongTasks || true;
    datadogRUMOptions.trackUserInteractions = datadogRUMOptions.trackUserInteractions || true;

    datadogRum.init(datadogRUMOptions);

    datadogRum.startSessionReplayRecording();
}

export async function datadogRUMCallback(
    evaluationCB: (evaluationRequest: FliptApi.evaluation.EvaluationRequest) => any,
    evaluationRequest: FliptApi.evaluation.EvaluationRequest
) {
    // This can result in either a Boolean, or Variant evaluation.
    const result = await evaluationCB(evaluationRequest);

    // Instrument Datadog RUM metrics after feature flag evaluation.
    let booleanEvaluationResponse = result as FliptApi.evaluation.BooleanEvaluationResponse;
    if (booleanEvaluationResponse !== undefined || booleanEvaluationResponse !== null) {
        datadogRum.addFeatureFlagEvaluation(
            `${evaluationRequest.namespaceKey}/${evaluationRequest.flagKey}`,
            booleanEvaluationResponse.enabled
        );
        return;
    }

    let variantEvaluationResponse = result as FliptApi.evaluation.VariantEvaluationResponse;
    if (variantEvaluationResponse !== undefined || variantEvaluationResponse !== null) {
        datadogRum.addFeatureFlagEvaluation(
            `${evaluationRequest.namespaceKey}/${evaluationRequest.flagKey}`,
            variantEvaluationResponse.variantKey
        );
        return;
    }
}
