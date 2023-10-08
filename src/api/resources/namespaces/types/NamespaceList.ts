/**
 */

import * as FliptApi from "../../..";

export interface NamespaceList {
    namespaces: FliptApi.Namespace[];
    nextPageToken: string;
    totalCount: number;
}
