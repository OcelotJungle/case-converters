import type { TokenArray } from "..";

import { CaseSeparatedCaseStrategy } from ".";
import { NOT_LETTER_OR_NUMBER } from "../regexps";

export class UnknownCaseStrategy extends CaseSeparatedCaseStrategy {
    protected static override parser = new RegExp(NOT_LETTER_OR_NUMBER, "gu");

    constructor() { super(true) }

    override parse(value: string) {
        return super.parse(value.replace(UnknownCaseStrategy.parser, " "));
    }

    override join(tokens: TokenArray) {
        return tokens.join(" ");
    }
}
