/**
 */

import * as FliptApi from "../../..";

export interface AuthenticationList {
    authentications: FliptApi.Authentication[];
    nextPageToken: string;
}
