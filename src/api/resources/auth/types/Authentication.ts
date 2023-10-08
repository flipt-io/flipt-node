/**
 */

import * as FliptApi from "../../..";

export interface Authentication {
    id: string;
    method: FliptApi.AuthenticationMethod;
    createdAt: Date;
    updatedAt: Date;
    expiresAt?: Date;
    metadata: Record<string, string>;
}
