export class CloneObjectHelper {
    public static clone<T>(object: T): T {
        return JSON.parse(JSON.stringify(object));
    }
}