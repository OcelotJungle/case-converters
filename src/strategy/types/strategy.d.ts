import type { TokenArray } from ".";

export interface CaseStrategy {
    parse(value: string): TokenArray;
    join(tokens: TokenArray): string;
}
