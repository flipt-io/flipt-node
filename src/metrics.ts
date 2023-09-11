import { FliptApi } from "@flipt-io/flipt";
import { Evaluation } from "api/resources/evaluation/client/Client";

export class FliptApiClientWithMetrics {
    evaluationClient: Evaluation;
    ddRum: any;

    constructor(evaluationClient: Evaluation, ddRum: any) {
        this.evaluationClient = evaluationClient;
        this.ddRum = ddRum;
    }

    public async boolean(
        request: FliptApi.evaluation.EvaluationRequest
    ): Promise<FliptApi.evaluation.BooleanEvaluationResponse> {
        const response = await this.evaluationClient.boolean(request);

        this.ddRum.addFeatureFlagEvaluation(`${request.namespaceKey}/${request.flagKey}`, response.enabled);
        return response;
    }

    public async variant(
        request: FliptApi.evaluation.EvaluationRequest
    ): Promise<FliptApi.evaluation.VariantEvaluationResponse> {
        const response = await this.evaluationClient.variant(request);

        this.ddRum.addFeatureFlagEvaluation(`${request.namespaceKey}/${request.flagKey}`, response.variantKey);
        return response;
    }
}
