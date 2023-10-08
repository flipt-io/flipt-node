/**
 */

export interface AuthenticationTokenCreateRequest {
    name: string;
    description: string;
    expiresAt?: Date;
}
