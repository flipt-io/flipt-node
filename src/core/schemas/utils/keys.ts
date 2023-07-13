export function keys<T>(object: T): (keyof T)[] {
    return Object.keys(object as {}) as (keyof T)[];
}
