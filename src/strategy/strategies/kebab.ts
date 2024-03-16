import { SymbolSeparatedCaseStrategy } from ".";

export class KebabCaseStrategy extends SymbolSeparatedCaseStrategy {
    constructor() { super("-", true) }
}
