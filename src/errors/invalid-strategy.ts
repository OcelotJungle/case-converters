export class InvalidStrategyError extends Error {
    constructor(name: string) {
        super(`Invalid strategy '${name}'`);
    }
}
