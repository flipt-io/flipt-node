/**
 */

import * as environments from "./environments";
import * as core from "./core";
import { Evaluation } from "./api/resources/evaluation/client/Client";
import { AuthMethodK8S } from "./api/resources/authMethodK8S/client/Client";
import { AuthMethodOidc } from "./api/resources/authMethodOidc/client/Client";
import { AuthMethodToken } from "./api/resources/authMethodToken/client/Client";
import { Auth } from "./api/resources/auth/client/Client";
import { Constraints } from "./api/resources/constraints/client/Client";
import { Distributions } from "./api/resources/distributions/client/Client";
import { Evaluate } from "./api/resources/evaluate/client/Client";
import { Flags } from "./api/resources/flags/client/Client";
import { Namespaces } from "./api/resources/namespaces/client/Client";
import { Rollouts } from "./api/resources/rollouts/client/Client";
import { Rules } from "./api/resources/rules/client/Client";
import { Segments } from "./api/resources/segments/client/Client";
import { Variants } from "./api/resources/variants/client/Client";

export declare namespace FliptApiClient {
    interface Options {
        environment?: core.Supplier<environments.FliptApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class FliptApiClient {
    constructor(protected readonly _options: FliptApiClient.Options) {}

    protected _evaluation: Evaluation | undefined;

    public get evaluation(): Evaluation {
        return (this._evaluation ??= new Evaluation(this._options));
    }

    protected _authMethodK8S: AuthMethodK8S | undefined;

    public get authMethodK8S(): AuthMethodK8S {
        return (this._authMethodK8S ??= new AuthMethodK8S(this._options));
    }

    protected _authMethodOidc: AuthMethodOidc | undefined;

    public get authMethodOidc(): AuthMethodOidc {
        return (this._authMethodOidc ??= new AuthMethodOidc(this._options));
    }

    protected _authMethodToken: AuthMethodToken | undefined;

    public get authMethodToken(): AuthMethodToken {
        return (this._authMethodToken ??= new AuthMethodToken(this._options));
    }

    protected _auth: Auth | undefined;

    public get auth(): Auth {
        return (this._auth ??= new Auth(this._options));
    }

    protected _constraints: Constraints | undefined;

    public get constraints(): Constraints {
        return (this._constraints ??= new Constraints(this._options));
    }

    protected _distributions: Distributions | undefined;

    public get distributions(): Distributions {
        return (this._distributions ??= new Distributions(this._options));
    }

    protected _evaluate: Evaluate | undefined;

    public get evaluate(): Evaluate {
        return (this._evaluate ??= new Evaluate(this._options));
    }

    protected _flags: Flags | undefined;

    public get flags(): Flags {
        return (this._flags ??= new Flags(this._options));
    }

    protected _namespaces: Namespaces | undefined;

    public get namespaces(): Namespaces {
        return (this._namespaces ??= new Namespaces(this._options));
    }

    protected _rollouts: Rollouts | undefined;

    public get rollouts(): Rollouts {
        return (this._rollouts ??= new Rollouts(this._options));
    }

    protected _rules: Rules | undefined;

    public get rules(): Rules {
        return (this._rules ??= new Rules(this._options));
    }

    protected _segments: Segments | undefined;

    public get segments(): Segments {
        return (this._segments ??= new Segments(this._options));
    }

    protected _variants: Variants | undefined;

    public get variants(): Variants {
        return (this._variants ??= new Variants(this._options));
    }
}
