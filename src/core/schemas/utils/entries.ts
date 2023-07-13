export function entries<T>(object: T): [keyof T, T[keyof T]][] {
    return Object.entries(object as {}) as [keyof T, T[keyof T]][];
}
