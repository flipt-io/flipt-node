/**
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as FliptApi from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Rules {
    interface Options {
        environment?: core.Supplier<environments.FliptApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Rules {
    constructor(protected readonly _options: Rules.Options) {}

    public async list(
        namespaceKey: string,
        flagKey: string,
        request: FliptApi.RuleListRequest = {},
        requestOptions?: Rules.RequestOptions
    ): Promise<FliptApi.RuleList> {
        const { limit, offset, pageToken } = request;
        const _queryParams = new URLSearchParams();
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (offset != null) {
            _queryParams.append("offset", offset.toString());
        }

        if (pageToken != null) {
            _queryParams.append("pageToken", pageToken);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${flagKey}/rules`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.RuleList.parseOrThrow(_response.body, {
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

    public async create(
        namespaceKey: string,
        flagKey: string,
        request: FliptApi.RuleCreateRequest,
        requestOptions?: Rules.RequestOptions
    ): Promise<FliptApi.Rule> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${flagKey}/rules`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.RuleCreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.Rule.parseOrThrow(_response.body, {
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

    public async order(
        namespaceKey: string,
        flagKey: string,
        request: FliptApi.RuleOrderRequest,
        requestOptions?: Rules.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${flagKey}/rules/order`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.RuleOrderRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return;
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

    public async get(
        namespaceKey: string,
        flagKey: string,
        id: string,
        requestOptions?: Rules.RequestOptions
    ): Promise<FliptApi.Rule> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${flagKey}/rules/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.Rule.parseOrThrow(_response.body, {
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

    public async delete(
        namespaceKey: string,
        flagKey: string,
        id: string,
        requestOptions?: Rules.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${flagKey}/rules/${id}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return;
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

    public async update(
        namespaceKey: string,
        flagKey: string,
        id: string,
        request: FliptApi.RuleUpdateRequest,
        requestOptions?: Rules.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FliptApiEnvironment.Production,
                `/api/v1/namespaces/${namespaceKey}/flags/${flagKey}/rules/${id}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.RuleUpdateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return;
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
