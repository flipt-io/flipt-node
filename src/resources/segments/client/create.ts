/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export type Response = core.APIResponse<FliptApi.Segment, FliptApi.segments.create.Error>;
export type Error = FliptApi.segments.create.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: FliptApi.segments.create.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}