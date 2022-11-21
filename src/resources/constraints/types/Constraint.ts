/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";

export interface Constraint {
  id: string;
  segmentKey: string;
  type: FliptApi.ConstraintComparisonType;
  property: string;
  operator: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}
