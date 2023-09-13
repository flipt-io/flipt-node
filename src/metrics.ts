import { FliptApi } from "@flipt-io/flipt";
import { Evaluation } from "api/resources/evaluation/client/Client";

export class FliptMetrics {
    evaluationClient: Evaluation;
    datadogRum: any;

    constructor(evaluationClient: Evaluation, datadogRum: any) {
        this.evaluationClient = evaluationClient;
        this.datadogRum = datadogRum;
    }

    public async boolean(
        request: FliptApi.evaluation.EvaluationRequest
    ): Promise<FliptApi.evaluation.BooleanEvaluationResponse> {
        const response = await this.evaluationClient.boolean(request);

        this.datadogRum.addFeatureFlagEvaluation(`${request.namespaceKey}/${request.flagKey}`, response.enabled);
        return response;
    }

    public async variant(
        request: FliptApi.evaluation.EvaluationRequest
    ): Promise<FliptApi.evaluation.VariantEvaluationResponse> {
        const response = await this.evaluationClient.variant(request);

        this.datadogRum.addFeatureFlagEvaluation(`${request.namespaceKey}/${request.flagKey}`, response.variantKey);
        return response;
    }
}
