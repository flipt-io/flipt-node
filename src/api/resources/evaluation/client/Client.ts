/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as FliptApi from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Evaluation {
    interface Options {
        environment?: core.Supplier<environments.FliptApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Evaluation {
    constructor(protected readonly _options: Evaluation.Options = {}) {}

    public async boolean(
        request: FliptApi.evaluation.EvaluationRequest,
        requestOptions?: Evaluation.RequestOptions
    ): Promise<FliptApi.evaluation.BooleanEvaluationResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FliptApiEnvironment.Production,
                "/evaluate/v1/boolean"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flipt-io/flipt",
                "X-Fern-SDK-Version": "0.2.18",
            },
            contentType: "application/json",
            body: await serializers.evaluation.EvaluationRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.evaluation.BooleanEvaluationResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
        request: FliptApi.evaluation.EvaluationRequest,
        requestOptions?: Evaluation.RequestOptions
    ): Promise<FliptApi.evaluation.VariantEvaluationResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FliptApiEnvironment.Production,
                "/evaluate/v1/variant"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flipt-io/flipt",
                "X-Fern-SDK-Version": "0.2.18",
            },
            contentType: "application/json",
            body: await serializers.evaluation.EvaluationRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.evaluation.VariantEvaluationResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
        request: FliptApi.evaluation.BatchEvaluationRequest,
        requestOptions?: Evaluation.RequestOptions
    ): Promise<FliptApi.evaluation.BatchEvaluationResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FliptApiEnvironment.Production,
                "/evaluate/v1/batch"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flipt-io/flipt",
                "X-Fern-SDK-Version": "0.2.18",
            },
            contentType: "application/json",
            body: await serializers.evaluation.BatchEvaluationRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.evaluation.BatchEvaluationResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
