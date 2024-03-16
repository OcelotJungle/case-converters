import type { CaseStrategy, TokenArray } from "../..";

import { capitalize } from "../../../util";
import * as regexp from "../../regexps";

export abstract class CaseSeparatedCaseStrategy implements CaseStrategy {
    protected static readonly parser = regexp.unite([
        regexp.BETWEEN_CAPS_AND_CAPITALIZED,
        regexp.BETWEEN_LOWER_AND_UPPER_CASE,
        regexp.BETWEEN_LETTER_AND_NUMBER,
        regexp.BETWEEN_NUMBER_AND_LETTER,
    ], "gu");

    private readonly preserveCase: boolean;
    private readonly preserveCaps: boolean;
    private readonly capitalizeAfter: number;

    constructor(preserveCase: true);
    constructor(capitalizeAfter: number, preserveCaps: boolean);
    constructor(...args: [true] | [number, boolean]) {
        if (typeof args[0] === "boolean") {
            this.preserveCase = true;
            this.preserveCaps = true;
            this.capitalizeAfter = Number.POSITIVE_INFINITY;
        }
        else {
            this.preserveCase = false;
            this.preserveCaps = args[1];
            this.capitalizeAfter = args[0];
        }
    }

    parse(value: string) {
        return value
            .replace(CaseSeparatedCaseStrategy.parser, " ")
            .trim()
            .split(/\s+/) as TokenArray;
    }

    join(tokens: TokenArray) {
        const capitalizeAfter = Math.max(0, this.capitalizeAfter);

        const plain = tokens.slice(0, capitalizeAfter);
        const toCapitalize = tokens.slice(capitalizeAfter);

        const capitalized = this.preserveCase
            ? toCapitalize
            : toCapitalize.map(token => {
                if (!this.preserveCaps || /\p{Ll}/u.test(token)) {
                    return capitalize(token);
                }

                return token;
            });

        return [...plain, ...capitalized].join("");
    }
}
