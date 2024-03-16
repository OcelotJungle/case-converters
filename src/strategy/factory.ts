import type { CaseStrategy, CaseStrategyName } from ".";

import {
    CamelCaseStrategy,
    ConstCaseStrategy,
    KebabCaseStrategy,
    PascalCaseStrategy,
    SnakeCaseStrategy,
    UnknownCaseStrategy,
} from ".";
import { InvalidStrategyError } from "../errors";

export class CaseStrategyFactory {
    /**
     * @throws {InvalidStrategyError} if no strategy with specified name
     */
    static create(name: CaseStrategyName): CaseStrategy {
        switch (name) {
            case "snake": return new SnakeCaseStrategy();
            case "const": return new ConstCaseStrategy();
            case "kebab": return new KebabCaseStrategy();
            case "camel": return new CamelCaseStrategy();
            case "pascal": return new PascalCaseStrategy();
            case "unknown": return new UnknownCaseStrategy();
            default: throw new InvalidStrategyError(name);
        }
    }
}
