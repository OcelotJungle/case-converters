import type { TokenArray } from "..";

import { SymbolSeparatedCaseStrategy } from ".";

export class ConstCaseStrategy extends SymbolSeparatedCaseStrategy {
    constructor() { super("_", false) }

    override join(tokens: TokenArray) {
        return super.join(tokens).toUpperCase();
    }
}
