import { FliptApi } from "@flipt-io/flipt";
import { Evaluation } from "api/resources/evaluation/client/Client";

export class FliptApiClientWithMetrics {
    fliptClient: Evaluation;
    ddRum: any;

    constructor(fliptClient: Evaluation, ddRum: any) {
        this.fliptClient = fliptClient;
        this.ddRum = ddRum;
    }

    public async boolean(
        request: FliptApi.evaluation.EvaluationRequest
    ): Promise<FliptApi.evaluation.BooleanEvaluationResponse> {
        const response = await this.fliptClient.boolean(request);

        this.ddRum.addFeatureFlagEvaluation(`${request.namespaceKey}/${request.flagKey}`, response.enabled);
        return response;
    }

    public async variant(
        request: FliptApi.evaluation.EvaluationRequest
    ): Promise<FliptApi.evaluation.VariantEvaluationResponse> {
        const response = await this.fliptClient.variant(request);

        this.ddRum.addFeatureFlagEvaluation(`${request.namespaceKey}/${request.flagKey}`, response.variantKey);
        return response;
    }
}
