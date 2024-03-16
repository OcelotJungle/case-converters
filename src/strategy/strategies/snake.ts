import { SymbolSeparatedCaseStrategy } from ".";

export class SnakeCaseStrategy extends SymbolSeparatedCaseStrategy {
    constructor() { super("_", true) }
}
