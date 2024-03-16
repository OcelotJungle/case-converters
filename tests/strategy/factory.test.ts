import type { CaseStrategy, CaseStrategyName } from "../../src";

import {
    CaseStrategyFactory as F,
    SnakeCaseStrategy,
    ConstCaseStrategy,
    KebabCaseStrategy,
    CamelCaseStrategy,
    PascalCaseStrategy,
    UnknownCaseStrategy,
} from "../../src";
import { InvalidStrategyError } from "../../src/errors";

describe("Strategy factory", () => {
    function check(name: CaseStrategyName, model: new () => CaseStrategy) {
        test(name, () => expect(F.create(name)).toBeInstanceOf(model));
    }

    check("snake", SnakeCaseStrategy);
    check("const", ConstCaseStrategy);
    check("kebab", KebabCaseStrategy);
    check("camel", CamelCaseStrategy);
    check("pascal", PascalCaseStrategy);
    check("unknown", UnknownCaseStrategy);

    test("throws for unexisting", () => {
        expect(() => F.create("__" as CaseStrategyName))
            .toThrow(InvalidStrategyError);
    });
});
