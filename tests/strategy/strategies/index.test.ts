import type { CaseStrategyName, TokenArray } from "../../../src";

import { CaseStrategyFactory } from "../../../src";
import { capitalize } from "../../../src/util";

type Strategy = [
    name: CaseStrategyName,
    value: string,
    tokens: TokenArray,
    joined?: string,
];

describe("Strategies", () => {
    const strategies: Strategy[] = [
        [
            "snake",
            "foo_bar_baz_42_buzz",
            ["foo", "bar", "baz", "42", "buzz"],
        ],
        [
            "const",
            "FOO_BAR_BAZ_42_BUZZ",
            ["FOO", "BAR", "BAZ", "42", "BUZZ"],
        ],
        [
            "kebab",
            "foo-bar-baz-42-buzz",
            ["foo", "bar", "baz", "42", "buzz"],
        ],
        [
            "camel",
            "fooBARBaz42Buzz",
            ["foo", "BAR", "Baz", "42", "Buzz"],
        ],
        [
            "pascal",
            "FooBARBaz42Buzz",
            ["Foo", "BAR", "Baz", "42", "Buzz"],
        ],
        [
            "unknown",
            "fooBARBaz_42-Buzz_BEEPBoop",
            ["foo", "BAR", "Baz", "42", "Buzz", "BEEP", "Boop"],
            "foo BAR Baz 42 Buzz BEEP Boop",
        ],
    ];

    for (const [name, value, tokens, joined = value] of strategies) {
        describe(capitalize(name), () => {
            const s = CaseStrategyFactory.create(name);

            test("parses", () => expect(s.parse(value)).toEqual(tokens));
            test("joins", () => expect(s.join(tokens)).toBe(joined));
        });
    }
});
