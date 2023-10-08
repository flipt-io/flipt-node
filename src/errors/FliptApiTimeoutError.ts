/**
 */

export class FliptApiTimeoutError extends Error {
    constructor() {
        super("Timeout");
        Object.setPrototypeOf(this, FliptApiTimeoutError.prototype);
    }
}
