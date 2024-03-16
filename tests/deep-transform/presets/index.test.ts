import * as preset from "../../../src/deep-transform/presets";

describe("Presets", () => {
    test("camel to snake", () => {
        expect(preset.camelToSnake({ fooBar: 42 })).toEqual({ foo_bar: 42 });
    });

    test("snake to camel", () => {
        expect(preset.snakeToCamel({ foo_bar: 42 })).toEqual({ fooBar: 42 });
    });

    test("unknown to camel", () => {
        expect(preset.unknownToCamel({ "fooBarBAZ42_Beep-Boop": 42 }))
            .toEqual({ fooBarBAZ42BeepBoop: 42 });
    });

    test("unknown to snake", () => {
        expect(preset.unknownToSnake({ "fooBarBAZ42_Beep-Boop": 42 }))
            .toEqual({ foo_bar_baz_42_beep_boop: 42 });
    });
});
