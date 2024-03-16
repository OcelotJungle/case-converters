import { uniteRegexp } from "../../src/util";

describe("Unite RegExp", () => {
    describe("Patterns", () => {
        test("unites strings", () => {
            const re = uniteRegexp(["foo", "bar"]);

            expect(re.test("afoob")).toBe(true);
            expect(re.test("cbard")).toBe(true);
            expect(re.test("ebazf")).toBe(false);
        });

        test("unites regexps", () => {
            const re = uniteRegexp([/foo/, /bar/]);

            expect(re.test("afoob")).toBe(true);
            expect(re.test("cbard")).toBe(true);
            expect(re.test("ebazf")).toBe(false);
        });

        test("unites strings and regexps", () => {
            const re = uniteRegexp(["foo", /bar/]);

            expect(re.test("afoob")).toBe(true);
            expect(re.test("cbard")).toBe(true);
            expect(re.test("ebazf")).toBe(false);
        });
    });

    describe("Flags", () => {
        test("uses explicit flags", () => {
            const re = uniteRegexp(["a", "b"], "g");

            expect("amber".replace(re, "")).toBe("mer");
        });

        test("unites flags", () => {
            const re = uniteRegexp([/a/i, /b/g]);

            expect("amBer".replace(re, "")).toBe("mer");
        });
    });
});
