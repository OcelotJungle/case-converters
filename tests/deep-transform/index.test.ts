import type { NameIgnorePredicate } from "../../src";

import { deepTransform, deepTransformFactory } from "../../src";

describe("Deep transform", () => {
    test("transforms", () => {
        const date = new Date();

        const from = {
            obj: {
                obj_2: {
                    foo_number: 42,
                    foo_string: "answer",
                    foo_boolean: true,
                    foo_big_int: 42n,
                    foo_date: date,
                },
            },
            arr: [
                {
                    arr_index: 0,
                },
                {
                    arr_index: 1,
                },
            ],
        };

        const to = {
            obj: {
                obj2: {
                    fooNumber: 42,
                    fooString: "answer",
                    fooBoolean: true,
                    fooBigInt: 42n,
                    fooDate: date,
                },
            },
            arr: [
                {
                    arrIndex: 0,
                },
                {
                    arrIndex: 1,
                },
            ],
        };

        expect(deepTransform("snake", "camel", from)).toEqual(to);
    });

    test("ignores by predicate", () => {
        const from = {
            foo_bar: 42,
            baz_buz: "ignored",
        };

        const to = {
            fooBar: 42,
            baz_buz: "ignored",
        };

        const predicate: NameIgnorePredicate = name => name === "baz_buz";

        expect(deepTransform("snake", "camel", from, predicate)).toEqual(to);
    });

    test("deep transform factory runs", () => {
        expect(deepTransformFactory("snake", "const")({ a: 42 })).toEqual({ A: 42 });
    });
});
