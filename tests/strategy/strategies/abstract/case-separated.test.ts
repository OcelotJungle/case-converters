import { CaseSeparatedCaseStrategy } from "../../../../src";

describe("Case Separated", () => {
    test("preserves case", () => {
        const s = new (class extends CaseSeparatedCaseStrategy {
            constructor() { super(true) }
        });

        expect(s.join(["foo", "bAR", "Baz"])).toBe("foobARBaz");
    });
});
