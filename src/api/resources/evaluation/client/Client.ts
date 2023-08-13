/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { FliptApi } from "@flipt-io/flipt";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Evaluation {
    interface Options {
        environment?: environments.FliptApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Evaluation {
    constructor(private readonly options: Evaluation.Options) {}

    public async boolean(
        request: FliptApi.evaluation.EvaluationRequest
    ): Promise<FliptApi.evaluation.BooleanEvaluationResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                "/evaluate/v1/boolean"
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.evaluation.EvaluationRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.evaluation.BooleanEvaluationResponse.parseOrThrow(
                _response.body as serializers.evaluation.BooleanEvaluationResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FliptApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FliptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FliptApiTimeoutError();
            case "unknown":
                throw new errors.FliptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async variant(
        request: FliptApi.evaluation.EvaluationRequest
    ): Promise<FliptApi.evaluation.VariantEvaluationResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                "/evaluate/v1/variant"
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.evaluation.EvaluationRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.evaluation.VariantEvaluationResponse.parseOrThrow(
                _response.body as serializers.evaluation.VariantEvaluationResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FliptApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FliptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FliptApiTimeoutError();
            case "unknown":
                throw new errors.FliptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async batch(
        request: FliptApi.evaluation.BatchEvaluationRequest
    ): Promise<FliptApi.evaluation.BatchEvaluationResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.FliptApiEnvironment.Production, "/evaluate/v1/batch"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.evaluation.BatchEvaluationRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.evaluation.BatchEvaluationResponse.parseOrThrow(
                _response.body as serializers.evaluation.BatchEvaluationResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FliptApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FliptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FliptApiTimeoutError();
            case "unknown":
                throw new errors.FliptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}