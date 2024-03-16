import type { CaseStrategy } from "./strategy";

export class CaseTransformer {
    constructor(
        private readonly parseStrategy: CaseStrategy,
        private readonly joinStrategy: CaseStrategy,
    ) { }

    transform(value: string) {
        return this.joinStrategy.join(
            this.parseStrategy.parse(value),
        );
    }
}
