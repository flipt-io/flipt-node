/**
 */

export interface Distribution {
    id: string;
    ruleId: string;
    variantId: string;
    rollout: number;
    createdAt: Date;
    updatedAt: Date;
}
