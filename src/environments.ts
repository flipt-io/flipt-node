/**
 */

export const FliptApiEnvironment = {
    Production: "http://localhost:8080",
} as const;

export type FliptApiEnvironment = typeof FliptApiEnvironment.Production;
