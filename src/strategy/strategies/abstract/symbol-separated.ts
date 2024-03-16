import type { CaseStrategy, TokenArray } from "../..";

export abstract class SymbolSeparatedCaseStrategy implements CaseStrategy {
    constructor(
        private readonly separator: string,
        private readonly lowercaseJoined: boolean,
    ) { }

    parse(value: string) {
        return value
            .split(this.separator)
            .filter(token => !!token.trim()) as TokenArray;
    }

    join(tokens: TokenArray) {
        const joined = tokens.join(this.separator);

        return this.lowercaseJoined ? joined.toLowerCase() : joined;
    }
}
