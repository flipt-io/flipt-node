/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "../../..";

export interface constraintCreateRequest {
  type: FliptApi.constraints.constraintComparisonType;
  property: string;
  operator: string;
  value?: string;
}